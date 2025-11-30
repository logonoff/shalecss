import {
  Button,
  Code,
  FlexContainer,
  FlexItem,
  H2,
  H3,
  H4,
  Note,
  P,
} from "@shalecss/react";
import {
  parseDocComment,
  type DocCommentParseResult,
} from "./docCommentParser";
import { LiveExample } from "./LiveExample";

interface ComponentDocProps {
  component: keyof typeof import("@shalecss/react");
}

function formatType(str: string): string {
  return str.replace(/\n/g, " ");
}

/**
 * Renders the TSDoc for a given shalecss export
 */
export const ComponentDoc: React.FC<ComponentDocProps> = ({ component }) => {
  const doc: DocCommentParseResult = parseDocComment(component);

  return (
    <FlexItem>
      <H2>{component}</H2>

      {doc.sourcePath && (
        <div style={{ marginBottom: "var(--shale-v1-font-1)" }}>
          <Button
            Component="a"
            href={`https://github.com/logonoff/shalecss/blob/main/workspaces/react/${doc.sourcePath}`}
            rel="noopener noreferrer"
            target="_blank"
            variant="secondary"
          >
            View Source
          </Button>
        </div>
      )}

      {doc.releaseStage === "alpha" && (
        <Note variant="alert">
          This component is in alpha stage and is subject to breaking changes.
        </Note>
      )}
      {doc.releaseStage === "beta" && (
        <Note variant="warn">
          This component is in beta stage and may have some breaking changes.
        </Note>
      )}
      {doc.isDeprecated && (
        <Note variant="info">
          This component is deprecated: {doc.isDeprecated}
        </Note>
      )}

      {doc.description && <P>{doc.description}</P>}

      {doc.examples.length > 0 && (
        <FlexItem Component="section">
          <H3>Examples</H3>
          <FlexContainer
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--shale-v1-font-2)",
              marginBottom: "var(--shale-v1-font-2)",
            }}
          >
            {doc.examples.map((example, index) => (
              <div key={index}>
                <H4>{example.title}</H4>
                <LiveExample code={example.code} />
              </div>
            ))}
          </FlexContainer>
        </FlexItem>
      )}

      {doc.props.length > 0 && (
        <FlexItem Component="section">
          <H3>Props</H3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {doc.props.map((prop) => (
                <tr key={prop.name}>
                  <td>
                    {prop.name}
                    {prop.isOptional ? (
                      ""
                    ) : (
                      <span aria-label="Required">*</span>
                    )}
                  </td>
                  <td>
                    <Code>{formatType(prop.type)}</Code>
                  </td>
                  <td>
                    {prop.defaultValue ? <Code>{prop.defaultValue}</Code> : "-"}
                  </td>
                  <td>{prop.description}</td>
                </tr>
              ))}
              {doc.defaultElement && (
                <tr>
                  <td>Component</td>
                  <td>
                    <Code>React.ElementType</Code>
                  </td>
                  <td>
                    <Code>'{doc.defaultElement}'</Code>
                  </td>
                  <td>The underlying HTML element to render.</td>
                </tr>
              )}
            </tbody>
          </table>
        </FlexItem>
      )}
    </FlexItem>
  );
};

export interface ComponentDocsProps {
  components: (keyof typeof import("@shalecss/react"))[];
}

export const ComponentDocs: React.FC<ComponentDocsProps> = ({ components }) => {
  return (
    <FlexContainer
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--shale-v1-font-5)",
        marginBottom: "var(--shale-v1-font-5)",
      }}
    >
      {components.map((component) => (
        <ComponentDoc key={component} component={component} />
      ))}
    </FlexContainer>
  );
};
