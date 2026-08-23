import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * A `SkipToContent` link is used for accessibility. This link becomes visible
 * when focused, allowing keyboard users to skip navigation and jump directly to
 * main content.
 *
 * @example Basic example
 *
 * ```tsx
 * <article>
 *   <P>
 *     Start your tabbing at the "Some navigation" button, and notice there
 *     is a skip link at the top left at the next tab. Activating the skip
 *     link will move your focus to the "Some content" heading.
 *   </P>
 *   <Button>Some navigation</Button>
 *   <SkipToContent href="#some-content">
 *     Skip to some content
 *   </SkipToContent>
 *   <H5 tabIndex="0" id="some-content">
 *     Some content
 *   </H5>
 * </article>;
 * ```
 *
 * @public
 */
export const SkipToContent: PolymorphicComponent<"a"> = ({
  Component = "a",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-skip")} />;
