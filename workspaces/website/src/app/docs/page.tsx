import { parseDocComment } from "@/components/ComponentDoc/docCommentParser";
import {
  Button,
  Card,
  FlexContainer,
  H2,
  H3,
  H4,
  H5,
  Link,
  P,
} from "@shalecss/react";
import { components } from "./components";

const componentLinks = Object.entries(components)
  .flatMap(([path, { components }]) =>
    components.map((componentName) => ({
      href: `${path}#${componentName}`,
      name: componentName,
    })),
  )
  .sort((a, b) => a.name.localeCompare(b.name));

export default () => (
  <>
    <H2>shale.css</H2>
    <P>
      shale.css is a simple CSS framework / React component library which
      provides some pesudo-skeuomorphic looking components and styles.
    </P>

    <P>
      The component and style library is for "simple" use and is not meant to be
      enterprise-grade. You can try it out on{" "}
      <Link
        href="https://www.npmjs.com/package/@shalecss/react"
        target="_blank"
        rel="noopener noreferrer"
      >
        npm
      </Link>{" "}
      or without npm by simply including the CSS file in your project.
    </P>

    <P>
      This project is also not supposed to replace all of your CSS needs. You'll
      likely want to write your own CSS, especially for small adjustments or for
      layouts. This is by design, by not including "everything but the kitchen
      sink" I can avoid writing all of that stuff and you can avoid loading it.
    </P>

    <FlexContainer variant="space-between" Component="section">
      <H3>Components</H3>

      <FlexContainer variant="space-between">
        {componentLinks.map(({ href, name }) => {
          const doc = parseDocComment(name);

          return (
            <Card
              Component={(props: any) => <Button Component="a" {...props} />}
              href={href.replace("/docs/", "./docs/")}
              className="shale-v1-flex-third"
              key={name}
              style={{
                marginBottom: "var(--shale-v1-font-2)",
                fontSize: "var(--shale-v1-font--2)",
                textAlign: "left",
              }}
            >
              {doc.isDeprecated ||
              doc.releaseStage === "alpha" ||
              doc.releaseStage === "beta" ? (
                <H5 Component="span">
                  {doc.isDeprecated ? "(deprecated)" : `(${doc.releaseStage})`}
                </H5>
              ) : null}
              <H4>{doc.name}</H4>
              <P>{doc.description}</P>
            </Card>
          );
        })}
      </FlexContainer>
    </FlexContainer>
  </>
);
