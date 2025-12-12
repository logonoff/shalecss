import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/** @alpha */
export interface CaptionButtonProps {
  /** The content of the `CaptionButton`. */
  children?: React.ReactNode;
  /** Props for the wrapper element. */
  wrapperProps?: React.HTMLAttributes<HTMLLIElement>;
}

/**
 * `CaptionButton` component provide specialized button and menu styling,
 * typically used for window controls or the header.
 *
 * Must be used within a {@link CaptionMenu} component.
 *
 * @alpha
 */
export const CaptionButton: PolymorphicComponent<
  "button",
  CaptionButtonProps
> = ({ Component = "button", wrapperProps, ...props }) => (
  <li {...wrapperProps}>
    <Component
      {...props}
      className={css("shale-v1-caption-button", props?.className)}
    />
  </li>
);

/**
 * A `CaptionMenu` component serves as a container for {@link CaptionButton},
 * arranging them in a horizontal layout suitable for window controls.
 *
 * @example Window controls
 *
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
 * </Header>;
 * ```
 *
 * @alpha
 */
export const CaptionMenu: PolymorphicComponent<"span", {}> = ({
  Component = "menu",
  ...props
}) => (
  <Component
    {...props}
    className={css("shale-v1-caption-menu", props?.className)}
  />
);
