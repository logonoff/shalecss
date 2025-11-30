import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * `CaptionButton` component provide specialized button and menu styling,
 * typically used for window controls or compact UI elements.
 *
 * Use within a {@link CaptionMenu} to render multiple at once.
 *
 * @example Basic example
 * ```tsx
 * <CaptionButton>×</CaptionButton>
 * ```
 *
 * @alpha
 */
export const CaptionButton: PolymorphicComponent<"button"> = ({
  Component = "button",
  ...props
}) => (
  <Component
    {...props}
    className={css("shale-v1-caption-button", props?.className)}
  />
);

/**
 * A `CaptionMenu` component serves as a container for {@link CaptionButton},
 * arranging them in a horizontal layout suitable for window controls.
 *
 * @example Window controls
 * ```tsx
 * <Header>
 *   <HeaderTitle>
 *     My Application
 *     <CaptionMenu>
 *       <CaptionButton>−</CaptionButton>
 *       <CaptionButton>□</CaptionButton>
 *       <CaptionButton>×</CaptionButton>
 *     </CaptionMenu>
 *   </HeaderTitle>
 * </Header>
 * ```
 *
 * @alpha
 */
export const CaptionMenu: PolymorphicComponent<"span", {}> = ({
  Component = "span",
  ...props
}) => (
  <Component
    {...props}
    className={css("shale-v1-caption-menu", props?.className)}
  />
);
