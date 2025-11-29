import { css } from "../utils/css";
import type { PolymorphicComponent } from "../types/helpers";

/**
 * A skip to content link component for accessibility. This link becomes visible when focused,
 * allowing keyboard users to skip navigation and jump directly to main content.
 *
 * @alpha
 */
export const SkipToContent: PolymorphicComponent<"a"> = ({
  Component = "a",
  ...props
}) => (
  <Component {...props} className={css("shale-v1-skip", props?.className)} />
);
