import { components } from "@/app/docs/components";
import {
  Code,
  FlexContainer,
  FlexItem,
  H2,
  H3,
  H4,
  Link,
  Note,
  P,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@shalecss/react";
import { parseDocComment } from "./docCommentParser";
import { LiveExample } from "./LiveExample";

interface ComponentDocProps {
  component: keyof typeof import("@shalecss/react");
}

function formatType(str: string): string {
  return str.replace(/\n/g, " ");
}

/** Renders the TSDoc for a given shalecss export */
export const ComponentDoc: React.FC<ComponentDocProps> = ({ component }) => {
  const doc = parseDocComment(component);

  return (
    <FlexItem style={{ maxWidth: "100%" }}>
      <H2 id={component}>{component}</H2>

      {doc.sourcePath && (
        <div style={{ marginBottom: "var(--shale-v1-font-1)" }}>
          <Link
            Component="a"
            href={`https://github.com/logonoff/shalecss/blob/main/workspaces/react/${doc.sourcePath}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View source
          </Link>
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
            variant="space-between"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--shale-v1-font-2)",
              marginBottom: "var(--shale-v1-font-2)",
              boxSizing: "border-box",
            }}
          >
            {doc.examples.map((example, index) => (
              <div style={{ overflowX: "scroll" }} key={index}>
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
          <Table scrollable>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Default</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {doc.props.map((prop) => (
                <Tr key={prop.name}>
                  <Td>
                    {prop.name}
                    {prop.isOptional ? (
                      ""
                    ) : (
                      <span
                        aria-label="Required"
                        style={{ color: "var(--shale-v1-note-alert-text)" }}
                      >
                        *
                      </span>
                    )}
                  </Td>
                  <Th>
                    <Code>{formatType(prop.type)}</Code>
                  </Th>
                  <Td>
                    {prop.defaultValue ? <Code>{prop.defaultValue}</Code> : "-"}
                  </Td>
                  <Td>{prop.description}</Td>
                </Tr>
              ))}
              {doc.defaultElement && (
                <Tr>
                  <Td>Component</Td>
                  <Td>
                    <Code>React.ElementType</Code>
                  </Td>
                  <Td>
                    <Code>'{doc.defaultElement}'</Code>
                  </Td>
                  <Td>The underlying HTML element to render.</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </FlexItem>
      )}
    </FlexItem>
  );
};

export interface ComponentDocsProps {
  pathname: keyof typeof components;
}

export const ComponentDocs: React.FC<ComponentDocsProps> = ({ pathname }) => {
  return (
    <FlexContainer
      variant="space-between"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--shale-v1-font-5)",
        marginBottom: "var(--shale-v1-font-5)",
      }}
    >
      {components[pathname].components.map((component) => (
        <ComponentDoc key={component} component={component} />
      ))}
    </FlexContainer>
  );
};
