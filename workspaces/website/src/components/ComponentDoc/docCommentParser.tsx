import {
  ApiModel,
  ApiItem,
  ApiDeclaredItem,
  ApiDocumentedItem,
  ApiPropertyItem,
  ApiInterface,
  ApiVariable,
  ReleaseTag,
  ApiReleaseTagMixin,
} from "@microsoft/api-extractor-model";
import {
  DocSection,
  DocBlock,
  DocFencedCode,
  DocPlainText,
  DocParagraph,
  DocNode,
  DocNodeKind,
  DocCodeSpan,
  DocEscapedText,
  DocLinkTag,
} from "@microsoft/tsdoc";
import path from "path";
import apiJson from "@shalecss/react/temp/react.api.json";
import { Code } from "@shalecss/react";

// Include apiJson to ensure that nextjs watches it and rebuilds on change
void apiJson;

const apiModel = new ApiModel();
const apiJsonPath = path.resolve(process.cwd(), "../react/temp/react.api.json");
const apiPackage = apiModel.loadPackage(apiJsonPath);

/**
 * Represents a parsed code example from documentation.
 */
export interface ParsedExample {
  /** The title of the example */
  title: string;
  /** The code content of the example */
  code: string;
}

/**
 * Represents a parsed prop from a component's props interface.
 */
export interface ParsedProp {
  /** The name of the prop */
  name: string;
  /** The TypeScript type of the prop */
  type: string;
  /** Whether the prop is optional */
  isOptional: boolean;
  /** The default value of the prop, if specified */
  defaultValue?: React.ReactNode;
  /** The description of the prop from documentation */
  description?: React.ReactNode;
}

/**
 * The result of parsing a component's documentation comment.
 */
export interface DocCommentParseResult {
  /** The name of the component */
  name: string;
  /** The component's description from the summary section */
  description?: React.ReactNode;
  /** Code examples from the documentation */
  examples: ParsedExample[];
  /** Props extracted from the component's props interface */
  props: ParsedProp[];
  /** The default HTML element the component renders as */
  defaultElement?: string;
  /** The release stage of the component (alpha, beta, public, deprecated) */
  releaseStage?: "alpha" | "beta" | "public";
  /** Whether the component is deprecated and why */
  isDeprecated?: React.ReactNode;
  /** The source file path relative to the package root */
  sourcePath?: string;
}

/**
 * Extracts React nodes from a TSDoc node, converting documentation markup to renderable components.
 */
const extractReactNodeFromText = (
  node: DocNode,
  key?: number,
): React.ReactNode => {
  switch (node.kind) {
    case DocNodeKind.PlainText:
      return (node as DocPlainText).text;

    case DocNodeKind.SoftBreak:
      return " ";

    case DocNodeKind.FencedCode: {
      const fencedCode = node as DocFencedCode;
      return (
        <Code key={key} Component="pre">
          {fencedCode.code}
        </Code>
      );
    }

    case DocNodeKind.CodeSpan: {
      const codeSpan = node as DocCodeSpan;
      return <Code key={key}>{codeSpan.code}</Code>;
    }

    case DocNodeKind.EscapedText:
      return (node as DocEscapedText).decodedText;

    case DocNodeKind.LinkTag: {
      const linkTag = node as DocLinkTag;
      // For {@link ComponentName} references, just show the text
      const linkText =
        linkTag.linkText ||
        linkTag.codeDestination?.memberReferences?.[0]?.memberIdentifier
          ?.identifier ||
        "link";
      return <Code key={key}>{linkText}</Code>;
    }

    case DocNodeKind.Paragraph:
    case DocNodeKind.Section: {
      const container = node as DocParagraph | DocSection;
      return container.nodes.map((child, i) =>
        extractReactNodeFromText(child, i),
      );
    }

    case DocNodeKind.Block:
    case DocNodeKind.BlockTag:
    case DocNodeKind.ParamBlock:
    case DocNodeKind.ParamCollection:
      // These are structural elements, recurse into children if present
      if ("content" in node) {
        const block = node as DocBlock;
        return extractReactNodeFromText(block.content);
      }
      return null;
  }

  // Fallback for any unhandled node types with children
  if ("nodes" in node) {
    return (node as DocParagraph).nodes.map((child, i) =>
      extractReactNodeFromText(child, i),
    );
  }
  return null;
};

/**
 * Converts a TSDoc section into React nodes.
 */
const getReactNodeFromSection = (
  section: DocSection | undefined,
): React.ReactNode => {
  if (!section) return null;
  return section.nodes.map((node, i) => extractReactNodeFromText(node, i));
};

/**
 * Parses example blocks from TSDoc custom blocks.
 */
const parseExamplesFromBlocks = (
  blocks: readonly DocBlock[],
): ParsedExample[] => {
  const examples: ParsedExample[] = [];

  for (const block of blocks) {
    if (block.blockTag.tagName !== "@example") continue;

    const title =
      (
        block.content.nodes.find(
          (node) => node.kind === DocNodeKind.Paragraph,
        ) as DocParagraph
      )?.nodes
        .map((child) => {
          if (child.kind === DocNodeKind.PlainText) {
            return (child as DocPlainText).text;
          }
          return "";
        })
        .join("")
        .trim() || "Example";

    const code = (
      block.content.nodes.find(
        (node) => node.kind === DocNodeKind.FencedCode,
      ) as DocFencedCode
    )?.code.trim();

    if (code) {
      examples.push({ title, code });
    }
  }

  return examples;
};

/**
 * Converts an API Extractor release tag to a release stage string.
 */
const getReleaseStage = (
  releaseTag: ReleaseTag,
): "alpha" | "beta" | "public" | undefined => {
  switch (releaseTag) {
    case ReleaseTag.Alpha:
      return "alpha";
    case ReleaseTag.Beta:
      return "beta";
    case ReleaseTag.Public:
      return "public";
    default:
      return undefined;
  }
};

/**
 * Checks if an API member is deprecated and extracts the deprecation message.
 */
const getIsDeprecated = (
  deprecatedBlock: DocBlock | undefined,
): React.ReactNode | undefined => {
  if (!deprecatedBlock) {
    return undefined;
  }
  return getReactNodeFromSection(deprecatedBlock.content);
};

/**
 * Finds an API member by name in the loaded API package.
 */
const findMember = (name: string): ApiItem | undefined => {
  const entryPoint = apiPackage.entryPoints[0];
  if (!entryPoint) return undefined;

  for (const member of entryPoint.members) {
    if (member.displayName === name) {
      return member;
    }
  }
  return undefined;
};

/**
 * Finds the props interface for a component variable.
 * Searches for interfaces matching patterns like `ComponentProps` or `BaseComponentProps`.
 */
const findPropsInterface = (
  componentMember: ApiVariable,
): ApiInterface | undefined => {
  const entryPoint = apiPackage.entryPoints[0];
  if (!entryPoint) return undefined;

  // Get the type excerpt and look for props interface references
  const excerpt = componentMember.excerpt.text;

  // Look for interface names in the type (e.g., BaseButtonProps, CardProps)
  const propsMatch = excerpt.match(/(?:Base)?(\w+Props)/);
  if (propsMatch) {
    const propsName = propsMatch[0];
    for (const member of entryPoint.members) {
      if (member.displayName === propsName && member.kind === "Interface") {
        return member as ApiInterface;
      }
    }
  }

  // Try common naming conventions
  const baseName = componentMember.displayName;
  const possibleNames = [`${baseName}Props`, `Base${baseName}Props`];

  for (const propName of possibleNames) {
    for (const member of entryPoint.members) {
      if (member.displayName === propName && member.kind === "Interface") {
        return member as ApiInterface;
      }
    }
  }

  return undefined;
};

/**
 * Extracts prop definitions from a props interface.
 */
const extractProps = (
  propsInterface: ApiInterface | undefined,
): ParsedProp[] => {
  if (!propsInterface) return [];

  const props: ParsedProp[] = [];

  for (const member of propsInterface.members) {
    if (member instanceof ApiPropertyItem) {
      const propMember = member as ApiPropertyItem;
      let description: React.ReactNode | undefined;
      let defaultValue: React.ReactNode | undefined;

      if (propMember instanceof ApiDocumentedItem && propMember.tsdocComment) {
        description = getReactNodeFromSection(
          propMember.tsdocComment.summarySection,
        );

        // Look for @defaultValue block
        for (const block of propMember.tsdocComment.customBlocks) {
          if (block.blockTag.tagName === "@defaultValue") {
            defaultValue = getReactNodeFromSection(block.content);
          }
        }
      }

      props.push({
        name: propMember.displayName,
        type: propMember.excerpt.text
          .replace(/^\w+\??:\s*/, "")
          .replace(/;$/, "")
          .trim(),
        isOptional: propMember.isOptional,
        defaultValue,
        description,
      });
    }
  }

  return props;
};

/**
 * Extracts the default HTML element from a polymorphic component's type signature.
 * Looks for patterns like `<"button",` or `<"div">` in the type excerpt.
 */
const getDefaultElement = (member: ApiVariable): string | undefined => {
  const excerpt = member.excerpt.text;
  // Match patterns like <"button", or <"div">
  const match = excerpt.match(/<"(\w+)"[,>]/);
  return match?.[1];
};

/**
 * Parses the documentation comment for a component from the API Extractor output.
 *
 * @throws Error if the component is not found in the API documentation
 */
export const parseDocComment = (
  componentName: keyof typeof import("@shalecss/react"),
): DocCommentParseResult => {
  const member = findMember(componentName);

  if (!member) {
    throw new Error(
      `Component "${componentName}" not found in API documentation.`,
    );
  }

  let description: DocCommentParseResult["description"];
  let examples: DocCommentParseResult["examples"] = [];
  let releaseStage: DocCommentParseResult["releaseStage"];
  let isDeprecated: DocCommentParseResult["isDeprecated"];

  if (member instanceof ApiDocumentedItem && member.tsdocComment) {
    description = getReactNodeFromSection(member.tsdocComment.summarySection);
    examples = parseExamplesFromBlocks(member.tsdocComment.customBlocks);
    isDeprecated = getIsDeprecated(member.tsdocComment.deprecatedBlock);
  }

  if (ApiReleaseTagMixin.isBaseClassOf(member)) {
    releaseStage = getReleaseStage(member.releaseTag);
  }

  let props: ParsedProp[] = [];
  let defaultElement: string | undefined;

  if (member instanceof ApiVariable) {
    const propsInterface = findPropsInterface(member);
    props = extractProps(propsInterface);
    defaultElement = getDefaultElement(member);
  }

  // Get the source file path from the member
  const sourcePath =
    member instanceof ApiDeclaredItem ? member.fileUrlPath : undefined;

  return {
    name: componentName,
    description,
    isDeprecated,
    examples,
    props,
    defaultElement,
    releaseStage,
    sourcePath,
  };
};
