import { Button, Card, FlexContainer, H2, H3, Link, P } from "@shalecss/react";
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
      provides some pesudo-skeuomorphic looking components for quick
      prototyping.
    </P>

    <P>
      The project grew out of the old{" "}
      <Link
        href="https://startnine.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start9 website
      </Link>{" "}
      CSS. I wanted to do something with it after the project was discontinued
      because of sunk-cost fallacy.
    </P>

    <P>
      The project is WIP and is not meant to be enterprise or anything. You can
      try it out on{" "}
      <Link
        href="https://www.npmjs.com/package/@shalecss/react"
        target="_blank"
        rel="noopener noreferrer"
      >
        npm
      </Link>{" "}
      or without npm by simply including the CSS file in your project.
    </P>

    <FlexContainer Component="section">
      <H3>A list of components that have documentation</H3>

      <FlexContainer variant="space-between">
        {componentLinks.map(({ href, name }) => (
          <Card
            Component={(props: any) => <Button Component="a" {...props} />}
            href={href}
            key={name}
            style={{ marginBottom: "var(--shale-v1-font-2)" }}
          >
            {name}
          </Card>
        ))}
      </FlexContainer>
    </FlexContainer>
  </>
);
