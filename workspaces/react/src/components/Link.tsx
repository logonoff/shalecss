import type { PolymorphicComponent } from "../types/helpers";
import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/** @alpha */
export interface BaseLinkProps {
  /** The initial state of the link (if you want to force a specific state) */
  state?: StateVariant;
}

/**
 * A link component.
 *
 * @example Basic link
 * ```tsx
 * <Link href="https://example.com">Visit Example</Link>
 * ```
 *
 * @example Link with forced state
 * ```tsx
 * <Link href="/page" state="hover">Hovered Link</Link>
 * ```
 *
 * @alpha
 */
export const Link: PolymorphicComponent<"a", BaseLinkProps> = ({
  Component = "a",
  state,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      "shale-v1-link",
      { [`shale-v1--${state}`]: state },
      props?.className,
    )}
  />
);
