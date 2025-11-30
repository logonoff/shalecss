import {
  Button,
  Card,
  Container,
  FlexContainer,
  FlexItem,
  H1,
  H2,
  H3,
  H4,
  P,
} from "@shalecss/react";

export default function Home() {
  return (
    <Container Component="main" id="maincontent">
      <Card Component={FlexContainer} variant="space-between" flex="grow">
        <FlexItem>
          <H1>shale.css</H1>
          <H4>simple pseudo-skeuomorph CSS styles</H4>
          <P>
            shale.css provides a simple set of CSS styles to quickly make a
            prototype look presentable
          </P>
        </FlexItem>
        <FlexContainer variant="align-center">
          <Button
            Component="a"
            href="https://github.com/logonoff/shalecss/"
            aria-label="GitHub repository for shale.css"
          >
            GitHub
          </Button>
        </FlexContainer>
      </Card>

      <FlexContainer variant="space-between">
        <Card flex="third">
          <H3>customizable</H3>
          <P>
            every colour is set by a CSS variable to make it easier to change
            how things look. dark, light, and high contrast themes are already
            included
          </P>
        </Card>
        <Card flex="third">
          <H3>no overrides</H3>
          <P>
            shale.css does not override any global styles, so it can be used in
            any project, alongside any other CSS framework if you'd like
          </P>
        </Card>
        <Card flex="third">
          <H3>based on browser elements</H3>
          <P>
            no wonky custom components. shale.css directly uses browser
            functionality so everything works exactly as you would expect
          </P>
        </Card>
      </FlexContainer>

      <section>
        <FlexContainer variant="center">
          <H2>check out some styles</H2>
        </FlexContainer>
      </section>

      <Card>
        <FlexContainer variant="space-between">
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-100)",
            }}
          >
            100
          </div>
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-200)",
            }}
          >
            200
          </div>
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-300)",
            }}
          >
            300
          </div>
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-400)",
            }}
          >
            400
          </div>
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-500)",
            }}
          >
            500
          </div>
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-600)",
            }}
          >
            600
          </div>
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-700)",
            }}
          >
            700
          </div>
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-800)",
            }}
          >
            800
          </div>
          <div
            className="shale-v1-flex-grow"
            style={{
              padding: "1em",
              backgroundColor: "var(--shale-v1-accent-900)",
            }}
          >
            900
          </div>
        </FlexContainer>
      </Card>

      <section>
        <FlexContainer variant="center">
          <H2>yup thats it</H2>
        </FlexContainer>
        <FlexContainer variant="center">
          <H4>it aint much but its honest work</H4>
        </FlexContainer>
      </section>
    </Container>
  );
}
