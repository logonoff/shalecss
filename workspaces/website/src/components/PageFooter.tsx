import {
  Code,
  Container,
  FlexItem,
  Footer,
  H6,
  Link,
  P,
} from "@shalecss/react";

export const PageFooter: React.FC = () => (
  <Footer>
    <Container>
      <FlexItem>
        <P>
          shale.css <Code>v1.0.0-prerelease</Code> (and it will probably stay
          prerelease forever)
        </P>
        <H6 Component="div">
          (c) 2017-2025 <Link href="https://logonoff.co">logonoff</Link>.
          licensed under the{" "}
          <Link href="https://github.com/logonoff/shalecss/blob/master/LICENSE">
            MIT license
          </Link>
        </H6>
      </FlexItem>
    </Container>
  </Footer>
);
