import type { PolymorphicComponent } from "../types/helpers";
import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/**
 * The base props for {@link Header}.
 *
 * @beta
 */
export interface HeaderProps {
  /** The initial state of the header (if you want to force a specific state) */
  state?: StateVariant;
  /** Move the border to the top instead of the bottom */
  invertBorder?: boolean;
  /** More compact styles for use in a titlebar */
  compact?: boolean;
}

/**
 * A `Header` is a container containing information which should be displayed at
 * the top of the page, such as a title, navigation, and common actions.
 *
 * @example Simple example
 *
 * ```tsx
 * <Header>
 *   <HeaderTitle>
 *     <HeaderText>example header bar (just the header)</HeaderText>
 *   </HeaderTitle>
 * </Header>;
 * ```
 *
 * @example With disabled state
 *
 * ```tsx
 * <Header state="disabled">
 *   <HeaderTitle>
 *     <HeaderText>example header bar (disabled)</HeaderText>
 *   </HeaderTitle>
 *   <Nav>
 *     <MenuBarButton href="#" current>
 *       current option
 *     </MenuBarButton>
 *     <MenuBarButton href="#" state="hover">
 *       hovered over
 *     </MenuBarButton>
 *     <MenuBarButton href="#" state="active">
 *       clicked on
 *     </MenuBarButton>
 *     <MenuBarButton href="#">idle</MenuBarButton>
 *     <MenuBarButton state="disabled">disabled</MenuBarButton>
 *   </Nav>
 * </Header>;
 * ```
 *
 * @example With all the bells and whistles
 *
 * ```tsx
 * <Header>
 *   <HeaderTitle>
 *     <HeaderText>
 *       example header bar with all the bells and whistles
 *     </HeaderText>
 *     <CaptionMenu>
 *       <CaptionButton title="Toggle text size">
 *         <Icon
 *           icon="a-lowercase"
 *           className="shale-v1-bigger-text-enabled"
 *         />
 *         <Icon
 *           icon="a-uppercase"
 *           className="shale-v1-bigger-text-disabled"
 *         />
 *       </CaptionButton>
 *       <CaptionButton title="Toggle contrast">
 *         <Icon icon="contrast" className="shale-v1-contrast-enabled" />
 *         <Icon
 *           icon="contrast"
 *           flipX
 *           className="shale-v1-contrast-disabled"
 *         />
 *       </CaptionButton>
 *       <CaptionButton title="Toggle dark mode">
 *         <Icon icon="moon-stroke" className="shale-v1-dark-enabled" />
 *         <Icon icon="moon-fill" className="shale-v1-dark-disabled" />
 *       </CaptionButton>
 *     </CaptionMenu>
 *   </HeaderTitle>
 *   <Nav>
 *     <MenuBarButton href="#" current>
 *       current option
 *     </MenuBarButton>
 *     <MenuBarButton href="#" state="hover">
 *       hovered over
 *     </MenuBarButton>
 *     <MenuBarButton href="#" state="active">
 *       clicked on
 *     </MenuBarButton>
 *     <MenuBarButton href="#">idle</MenuBarButton>
 *     <MenuBarButton state="disabled">disabled</MenuBarButton>
 *   </Nav>
 *   <CommandBar>
 *     <Button Component="a" href="#" variant="secondary">
 *       😂 Live
 *     </Button>
 *     <Button Component="a" href="#" variant="secondary">
 *       🤔 Laugh
 *     </Button>
 *     <Button Component="a" href="#" variant="secondary">
 *       🥰 Love
 *     </Button>
 *     (command bar for optional actions)
 *   </CommandBar>
 * </Header>;
 * ```
 *
 * @beta
 */
export const Header: PolymorphicComponent<"header", HeaderProps> = ({
  Component = "header",
  state,
  invertBorder = false,
  compact = false,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      props,
      "shale-v1-header",
      { [`shale-v1--${state}`]: state },
      { "shale-v1-header-invert-border": invertBorder },
      { "shale-v1-header-compact": compact },
    )}
  />
);

/**
 * A `HeaderTitle` contains a title for the {@link Header} component.
 *
 * @example Basic usage
 *
 * ```tsx
 * <HeaderTitle>My Application</HeaderTitle>;
 * ```
 *
 * @beta
 */
export const HeaderTitle: PolymorphicComponent<"div", {}> = ({
  Component = "div",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-header-title")} />;

/**
 * A `HeaderText` displays text for the {@link Header} component, typically
 * placed as a child of {@link HeaderTitle}.
 *
 * @example Basic usage
 *
 * ```tsx
 * <HeaderText>A description or subtitle for the header.</HeaderText>;
 * ```
 *
 * @beta
 */
export const HeaderText: PolymorphicComponent<"p", {}> = ({
  Component = "p",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-header-text")} />;
