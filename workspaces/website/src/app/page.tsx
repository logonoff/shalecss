"use client";

import {
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Code,
  Header,
  HeaderTitle,
  HeaderText,
  CaptionMenu,
  CaptionButton,
  Icon,
  Nav,
  MenuBarButton,
  CommandBar,
  Container,
  FlexContainer,
  Link,
  Input,
  Select,
  Textarea,
  FlexForm,
  Note,
  NoteText,
  Footer,
  FlexItem,
} from "@shalecss/react";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const {
    theme,
    setTheme,
    size,
    setSize,
  } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const toggleContrast = () => {
    if (theme !== "contrast") {
      setTheme("contrast");
    } else {
      setTheme("light");
    }
  };

  const toggleTextSize = () => {
    if (size === "regular") {
      setSize("large");
    } else {
      setSize("regular");
    }
  };

  return (
    <>
      <Header>
        <HeaderTitle>
          <HeaderText>shale.css</HeaderText>

          <CaptionMenu>
            <CaptionButton
              onClick={toggleTextSize}
              title="Toggle text size"
            >
              <Icon icon="a-lowercase" className="shale-v1-bigger-text-enabled" />
              <Icon icon="a-uppercase" className="shale-v1-bigger-text-disabled" />
            </CaptionButton>

            <CaptionButton
              onClick={toggleContrast}
              title="Toggle theme"
            >
              <Icon icon="contrast" className="shale-v1-contrast-enabled" />
              <Icon icon="contrast" flipX className="shale-v1-contrast-disabled" />
            </CaptionButton>

            <CaptionButton
              onClick={toggleTheme}
              title="Toggle dark mode"
            >
              <Icon icon="moon-stroke" className="shale-v1-dark-enabled" />
              <Icon icon="moon-fill" className="shale-v1-dark-disabled" />
            </CaptionButton>
          </CaptionMenu>
        </HeaderTitle>
      </Header>

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
              shale.css does not override any global styles, so it can be used
              in any project, alongside any other CSS framework if you'd like
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

          <H1>Heading level 1</H1>
          <H2>Heading level 2</H2>
          <H3>Heading level 3</H3>
          <H4>Heading level 4</H4>
          <H5>Heading level 5</H5>
          <H6>Heading level 6</H6>

          <Code Component="pre">{`def get_a_million_dollars():
    return P == NP

print(get_a_million_dollars())`}</Code>
        </section>

        <Card>
          <FlexContainer variant="space-between">
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-100)" }}
            >
              100
            </div>
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-200)" }}
            >
              200
            </div>
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-300)" }}
            >
              300
            </div>
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-400)" }}
            >
              400
            </div>
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-500)" }}
            >
              500
            </div>
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-600)" }}
            >
              600
            </div>
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-700)" }}
            >
              700
            </div>
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-800)" }}
            >
              800
            </div>
            <div
              className="shale-v1-flex-grow"
              style={{ padding: "1em", backgroundColor: "var(--shale-v1-accent-900)" }}
            >
              900
            </div>
          </FlexContainer>
        </Card>

        <FlexContainer variant="space-between">
          <Card flex="third" shadow="subtle">
            subtle shadows
          </Card>
          <Card flex="third" shadow="moderate">
            moderate shadows
          </Card>
          <Card flex="third" shadow="puffy">
            puffy shadows
          </Card>
        </FlexContainer>

        <FlexContainer variant="space-between">
          <Note variant="info" flex="quarter">
            <Icon icon="info" />
            <strong> Note</strong>
            <NoteText>Doo doo doo-doo doo doo doo doo</NoteText>
          </Note>

          <Note variant="alert" flex="quarter">
            <Icon icon="warning" />
            <strong>Important</strong>
            <NoteText>Doo doo doo-doo doo doo doo doo</NoteText>
          </Note>

          <Note variant="warn" flex="quarter">
            <Icon icon="danger" />
            <strong>Warning</strong>
            <NoteText>Doo doo doo-doo doo doo doo doo</NoteText>
          </Note>

          <Note variant="tip" flex="quarter">
            <Icon icon="lightbulb" />
            <strong>Tip</strong>
            <NoteText>Doo doo doo-doo doo doo doo doo</NoteText>
          </Note>
        </FlexContainer>

        <section>
          <H2>buttons and forms</H2>

          <H3>enabled</H3>

          <FlexContainer variant="space-between">
            <FlexForm>
              <Input placeholder="text" type="text" />
              <Input placeholder="password" type="password" />
              <Input placeholder="email" type="email" />
              <Input placeholder="url" type="url" />
              <Input placeholder="tel" type="tel" />
              <Input placeholder="number" type="number" />
              <Input placeholder="search" type="search" />
              <Input placeholder="date" type="date" />
              <Input placeholder="time" type="time" />
              <Input placeholder="datetime-local" type="datetime-local" />
              <Input placeholder="month" type="month" />
              <Input placeholder="week" type="week" />

              <Select name="demo input">
                <optgroup label="Fruits">
                  <option>Apples</option>
                  <option>Oranges</option>
                  <option>Pomegranates</option>
                </optgroup>
                <optgroup label="Vegetables" disabled>
                  <option>Carrots</option>
                  <option>Peas</option>
                  <option>Broccoli</option>
                </optgroup>
                <option>Meat</option>
                <option>Dairy</option>
                <option disabled>Grains</option>
              </Select>

              <Button Component="button">
                button
              </Button>
              <Button Component="a" href="#" variant="secondary">
                secondary button
              </Button>
              <Link href="#">link</Link>

              <Input type="radio" name="demo-radio" id="radio1" label="Radio1" />
              <Input
                type="radio"
                name="demo-radio"
                id="radio2"
                label="Radio2"
                defaultChecked
              />

              <Input
                type="checkbox"
                name="checkbox1"
                id="checkbox1"
                label="Checkbox1"
                defaultChecked
              />
              <Input type="checkbox" name="checkbox2" id="checkbox2" label="Checkbox2" />
              <Input type="checkbox" name="checkbox3" id="checkbox3" label="Checkbox3" />

              <Textarea placeholder="textarea" />
            </FlexForm>

            <div>
              <H3>disabled</H3>

              <FlexForm>
                <Input disabled placeholder="text" type="text" />
                <Input disabled placeholder="password" type="password" />
                <Input disabled placeholder="email" type="email" />

                <Select disabled name="demo-input-disabled">
                  <option>Apples</option>
                </Select>

                <Button state="disabled">button</Button>
                <Button variant="secondary" state="disabled">
                  secondary button
                </Button>
                <Link state="disabled">link</Link>

                <Input
                  disabled
                  type="radio"
                  name="demo-radio-disabled"
                  id="radio3"
                  label="Radio3"
                />
                <Input
                  disabled
                  type="radio"
                  name="demo-radio-disabled"
                  id="radio4"
                  label="Radio4"
                  defaultChecked
                />

                <Input
                  disabled
                  type="checkbox"
                  id="checkbox4"
                  label="Checkbox4"
                  defaultChecked
                />
                <Input disabled type="checkbox" id="checkbox5" label="Checkbox5" />

                <Textarea disabled placeholder="textarea" />
              </FlexForm>
            </div>
          </FlexContainer>
        </section>

        <section>
          <FlexContainer variant="space-between">
            <H2>headers and footers</H2>

            <Header>
              <HeaderTitle>
                <HeaderText>example header bar (just the header)</HeaderText>
              </HeaderTitle>
            </Header>

            <Header state="disabled">
              <HeaderTitle>
                <HeaderText>example header bar (disabled)</HeaderText>
              </HeaderTitle>

              <Nav>
                <MenuBarButton href="#" current>
                  current option
                </MenuBarButton>
                <MenuBarButton href="#" state="hover">
                  hovered over
                </MenuBarButton>
                <MenuBarButton href="#" state="active">
                  clicked on
                </MenuBarButton>
                <MenuBarButton href="#">idle</MenuBarButton>
                <MenuBarButton state="disabled">disabled</MenuBarButton>
              </Nav>
            </Header>

            <Header>
              <HeaderTitle>
                <HeaderText>
                  example header bar with all the bells and whistles
                </HeaderText>

                <CaptionMenu>
                  <CaptionButton title="Toggle text size">
                    <Icon icon="a-lowercase" className="shale-v1-bigger-text-enabled" />
                    <Icon icon="a-uppercase" className="shale-v1-bigger-text-disabled" />
                  </CaptionButton>

                  <CaptionButton darkDisabled title="Toggle contrast">
                    <Icon icon="contrast" className="shale-v1-contrast-enabled" />
                    <Icon icon="contrast" flipX className="shale-v1-contrast-disabled" />
                  </CaptionButton>

                  <CaptionButton contrastDisabled title="Toggle dark mode">
                    <Icon icon="moon-stroke" className="shale-v1-dark-enabled" />
                    <Icon icon="moon-fill" className="shale-v1-dark-disabled" />
                  </CaptionButton>
                </CaptionMenu>
              </HeaderTitle>

              <Nav>
                <MenuBarButton href="#" current>
                  current option
                </MenuBarButton>
                <MenuBarButton href="#" state="hover">
                  hovered over
                </MenuBarButton>
                <MenuBarButton href="#" state="active">
                  clicked on
                </MenuBarButton>
                <MenuBarButton href="#">idle</MenuBarButton>
                <MenuBarButton state="disabled">disabled</MenuBarButton>
              </Nav>

              <CommandBar>
                <Button Component="a" href="#" variant="secondary">
                  😂 Live
                </Button>
                <Button Component="a" href="#" variant="secondary">
                  🤔 Laugh
                </Button>
                <Button Component="a" href="#" variant="secondary">
                  🥰 Love
                </Button>
                (command bar for optional actions)
              </CommandBar>
            </Header>

            <CommandBar flexGrow>
              command bar and navbar can be used separately if you want
              <Button Component="a" href="#" variant="secondary">
                😋 Yum
              </Button>
            </CommandBar>

            <Footer>
              <Container>
                <P>footer</P>
              </Container>
            </Footer>
          </FlexContainer>
        </section>

        <section>
          <H2>containers</H2>

          <H3>halves</H3>
          <FlexContainer variant="center">
            <Card flex="half">half</Card>
            <Card flex="half">half</Card>
          </FlexContainer>

          <H3>third</H3>
          <FlexContainer variant="center">
            <Card flex="third">third</Card>
            <Card flex="third">third</Card>
            <Card flex="third">third</Card>
          </FlexContainer>

          <H3>quarters</H3>
          <FlexContainer variant="center">
            <Card flex="quarter">quarter</Card>
            <Card flex="quarter">quarter</Card>
            <Card flex="quarter">quarter</Card>
            <Card flex="quarter">quarter</Card>
          </FlexContainer>
        </section>

        <section>
          <H2>icons</H2>
          <FlexContainer variant="space-between">
            <Icon icon="a-lowercase" />
            <Icon icon="a-uppercase" />
            <Icon icon="accessibility" />
            <Icon icon="blocked" />
            <Icon icon="brightness-contrast" />
            <Icon icon="bubbles" />
            <Icon icon="contrast" />
            <Icon icon="danger" />
            <Icon icon="discord" />
            <Icon icon="download" />
            <Icon icon="earth" />
            <Icon icon="embed" />
            <Icon icon="enlarge" />
            <Icon icon="github" />
            <Icon icon="hashtag" />
            <Icon icon="info" />
            <Icon icon="lightbulb" />
            <Icon icon="link" />
            <Icon icon="minus-circle" />
            <Icon icon="minus" />
            <Icon icon="moon-fill" />
            <Icon icon="moon-stroke" />
            <Icon icon="newtab" />
            <Icon icon="notification" />
            <Icon icon="plus-circle" />
            <Icon icon="plus" />
            <Icon icon="power" />
            <Icon icon="quotes-left" />
            <Icon icon="quotes-right" />
            <Icon icon="reddit" />
            <Icon icon="rss" />
            <Icon icon="search" />
            <Icon icon="shrink" />
            <Icon icon="stackoverflow" />
            <Icon icon="star-empty" />
            <Icon icon="sun" />
            <Icon icon="upload" />
            <Icon icon="warning" />
            <Icon icon="windows" />
            <Icon icon="windows8" />
            <Icon icon="youtube" />
          </FlexContainer>
        </section>

        <section>
          <FlexContainer variant="center">
            <H2>yup thats it</H2>
          </FlexContainer>
          <FlexContainer variant="center">
            <H4>it aint much but its honest work</H4>
          </FlexContainer>
        </section>
      </Container>

      <Footer>
        <Container>
          <P>
            shale.css <Code Component="code">v1.0.0-prerelease</Code> (and it
            will probably stay prerelease forever)
            <br />
            <H6 Component="span">
              (c) 2017-2025{" "}
              <Link href="https://logonoff.co">logonoff</Link>. licensed under
              the{" "}
              <Link href="https://github.com/logonoff/shalecss/blob/master/LICENSE">
                MIT license
              </Link>
            </H6>
          </P>
        </Container>
      </Footer>
    </>
  );
}
