import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * A skip to content link component for accessibility. This link becomes visible
 * when focused, allowing keyboard users to skip navigation and jump directly to
 * main content.
 *
 * @public
 */
export const SkipToContent: PolymorphicComponent<"a"> = ({
  Component = "a",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-skip")} />;
