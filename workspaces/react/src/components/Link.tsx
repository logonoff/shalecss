import type { PolymorphicComponent } from "../types/helpers";
import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/**
 * The base props for {@link Link}.
 *
 * @public
 */
export interface LinkProps {
  /** The initial state of the link (if you want to force a specific state) */
  state?: StateVariant;
  /** Shows an external link icon */
  isExternal?: boolean;
}

/**
 * A `Link` is used to navigate to other pages or sections of a page.
 *
 * External links (links with `target="_blank"`) will automatically show an
 * external link icon, but you can also explicitly set `isExternal` to `true` to
 * show the icon, or set it to `false` to hide the icon.
 *
 * @example Basic link
 *
 * ```tsx
 * <Link href="https://example.com">Visit Example</Link>;
 * ```
 *
 * @example Link with forced state
 *
 * ```tsx
 * <Link href="/" state="hover">
 *   Hovered Link
 * </Link>;
 * ```
 *
 * @example External link
 *
 * ```tsx
 * <Link
 *   href="https://example.com"
 *   state="hover"
 *   target="_blank"
 *   rel="noopener noreferrer"
 * >
 *   Go to Example
 * </Link>;
 * ```
 *
 * @public
 */
export const Link: PolymorphicComponent<"a", LinkProps> = ({
  Component = "a",
  state,
  isExternal,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      props,
      "shale-v1-link",
      { [`shale-v1--${state}`]: state },
      { "shale-v1--external": isExternal === true },
      { "shale-v1--no-icon": isExternal === false },
    )}
  />
);
