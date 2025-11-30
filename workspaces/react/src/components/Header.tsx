import type { PolymorphicComponent } from "../types/helpers";
import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/** @alpha */
export interface BaseHeaderProps {
  /** The initial state of the header (if you want to force a specific state) */
  state?: StateVariant;
}

/**
 * A header component.
 *
 * @example Simple example
 * ```tsx
 * <Header>
 *   <HeaderTitle>
 *     <HeaderText>example header bar (just the header)</HeaderText>
 *   </HeaderTitle>
 * </Header>
 * ```
 *
 * @example With disabled state
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
 * </Header>
 * ```
 *
 * @example With all the bells and whistles
 * ```tsx
 * <Header>
 *   <HeaderTitle>
 *     <HeaderText>
 *       example header bar with all the bells and whistles
 *     </HeaderText>
 *     <CaptionMenu>
 *       <CaptionButton title="Toggle text size">
 *         <Icon icon="a-lowercase" className="shale-v1-bigger-text-enabled" />
 *         <Icon icon="a-uppercase" className="shale-v1-bigger-text-disabled" />
 *       </CaptionButton>
 *       <CaptionButton title="Toggle contrast">
 *         <Icon icon="contrast" className="shale-v1-contrast-enabled" />
 *         <Icon icon="contrast" flipX className="shale-v1-contrast-disabled" />
 *       </CaptionButton>
 *       <CaptionButton title="Toggle dark mode">
 *         <Icon icon="moon-stroke" className="shale-v1-dark-enabled" />
 *         <Icon icon="moon-fill" className="shale-v1-dark-disabled" />
 *       </CaptionButton>
 *     </CaptionMenu>
 *   </HeaderTitle>
 *   <Nav>
 *     <MenuBarButton href="#" current>current option</MenuBarButton>
 *     <MenuBarButton href="#" state="hover">hovered over</MenuBarButton>
 *     <MenuBarButton href="#" state="active">clicked on</MenuBarButton>
 *     <MenuBarButton href="#">idle</MenuBarButton>
 *     <MenuBarButton state="disabled">disabled</MenuBarButton>
 *   </Nav>
 *   <CommandBar>
 *     <Button Component="a" href="#" variant="secondary">😂 Live</Button>
 *     <Button Component="a" href="#" variant="secondary">🤔 Laugh</Button>
 *     <Button Component="a" href="#" variant="secondary">🥰 Love</Button>
 *     (command bar for optional actions)
 *   </CommandBar>
 * </Header>
 * ```
 *
 * @alpha
 */
export const Header: PolymorphicComponent<"header", BaseHeaderProps> = ({
  Component = "header",
  state,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      "shale-v1-header",
      { [`shale-v1--${state}`]: state },
      props?.className,
    )}
  />
);

/**
 * A header title component, for use in {@link Header}.
 *
 * @example Basic usage
 * ```tsx
 * <HeaderTitle>My Application</HeaderTitle>
 * ```
 *
 * @alpha
 */
export const HeaderTitle: PolymorphicComponent<"div", {}> = ({
  Component = "div",
  ...props
}) => (
  <Component
    {...props}
    className={css("shale-v1-header-title", props?.className)}
  />
);

/**
 * Text for the header component, for use in {@link HeaderTitle}.
 *
 * @example Basic usage
 * ```tsx
 * <HeaderText>A description or subtitle for the header.</HeaderText>
 * ```
 *
 * @alpha
 */
export const HeaderText: PolymorphicComponent<"p", {}> = ({
  Component = "p",
  ...props
}) => (
  <Component
    {...props}
    className={css("shale-v1-header-text", props?.className)}
  />
);
