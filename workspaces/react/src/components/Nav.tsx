import { css } from "../utils/css";
import type { StateVariant } from "../types/variants";
import type { PolymorphicComponent } from "../types/helpers";

/**
 * The navigation component.
 *
 * @example Basic navigation
 * ```tsx
 * <Nav>
 *   <MenuBarButton href="/">Home</MenuBarButton>
 *   <MenuBarButton href="/about">About</MenuBarButton>
 *   <MenuBarButton href="/contact" current>Contact</MenuBarButton>
 * </Nav>
 * ```
 *
 * @alpha
 */
export const Nav: PolymorphicComponent<"nav", {}> = ({
  Component = "nav",
  ...props
}) => (
  <Component {...props} className={css("shale-v1-nav", props?.className)} />
);

/** @alpha */
export interface BaseMenuBarButtonProps {
  /** Whether this menu item is the current page */
  current?: boolean;
  /** The initial state of the menu button (if you want to force a specific state) */
  state?: StateVariant;
}

/**
 * A menu bar button component.
 *
 * @example Basic menu button
 * ```tsx
 * <MenuBarButton href="/page">Page Link</MenuBarButton>
 * ```
 *
 * @example Current page indicator
 * ```tsx
 * <MenuBarButton href="/current" current>Current Page</MenuBarButton>
 * ```
 *
 * @alpha
 */
export const MenuBarButton: PolymorphicComponent<
  "a",
  BaseMenuBarButtonProps
> = ({ Component = "a", current, state, ...props }) => (
  <Component
    {...props}
    className={css(
      "shale-v1-menu-bar-button",
      { "shale-v1-current": current },
      { [`shale-v1--${state}`]: state },
      props?.className,
    )}
  />
);
