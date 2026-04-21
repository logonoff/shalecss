import type { PolymorphicComponent } from "../types/helpers";
import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/** @alpha */
export interface BaseLinkProps {
  /** The initial state of the link (if you want to force a specific state) */
  state?: StateVariant;
  /** Shows an external link icon */
  isExternal?: boolean;
}

/**
 * A link component.
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
 * @alpha
 */
export const Link: PolymorphicComponent<"a", BaseLinkProps> = ({
  Component = "a",
  state,
  isExternal,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      "shale-v1-link",
      { [`shale-v1--${state}`]: state },
      { "shale-v1--external": isExternal === true },
      { "shale-v1--no-icon": isExternal === false },
      props?.className,
    )}
  />
);
