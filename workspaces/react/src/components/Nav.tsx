import type { PolymorphicComponent } from "../types/helpers";
import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/**
 * A `Nav` contains the navigation links for a page. It expects to be wrapped in
 * a `Header` as well as using {@link MenuBarButton}s as children.
 *
 * @example Basic navigation
 *
 * ```tsx
 * <Nav>
 *   <MenuBarButton href="/">Home</MenuBarButton>
 *   <MenuBarButton href="/about">About</MenuBarButton>
 *   <MenuBarButton href="/contact" current>
 *     Contact
 *   </MenuBarButton>
 * </Nav>;
 * ```
 *
 * @alpha
 */
export const Nav: PolymorphicComponent<"nav", {}> = ({
  Component = "nav",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-nav")} />;

/**
 * The base props for {@link MenuBarButton}.
 *
 * @alpha
 */
export interface MenuBarButtonProps {
  /** Whether this menu item is the current page */
  current?: boolean;
  /**
   * The initial state of the menu button (if you want to force a specific
   * state)
   */
  state?: StateVariant;
}

/**
 * A `MenuBarButton` is a button used inside of a {@link Nav}, typically for
 * navigation.
 *
 * @example Basic menu button
 *
 * ```tsx
 * <MenuBarButton href="/page">Page Link</MenuBarButton>;
 * ```
 *
 * @example Current page indicator
 *
 * ```tsx
 * <MenuBarButton href="/current" current>
 *   Current Page
 * </MenuBarButton>;
 * ```
 *
 * @alpha
 */
export const MenuBarButton: PolymorphicComponent<"a", MenuBarButtonProps> = ({
  Component = "a",
  current,
  state,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      props,
      "shale-v1-menu-bar-button",
      { "shale-v1-current": current },
      { [`shale-v1--${state}`]: state },
    )}
  />
);
