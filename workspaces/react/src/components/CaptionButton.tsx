import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * The base props for {@link CaptionButton}.
 *
 * @alpha
 */
export interface CaptionButtonProps {
  /** The content of the `CaptionButton`. */
  children?: React.ReactNode;
  /** Props for the wrapper element. */
  wrapperProps?: React.HTMLAttributes<HTMLLIElement>;
}

/**
 * A `CaptionButton` provides specialized button and menu styling, typically
 * used for window controls or the header.
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
    <Component {...props} className={css(props, "shale-v1-caption-button")} />
  </li>
);

/**
 * A `CaptionMenu` serves as a container for {@link CaptionButton}, arranging
 * them in a horizontal layout suitable for window controls.
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
 * @beta
 */
export const CaptionMenu: PolymorphicComponent<"span", {}> = ({
  Component = "menu",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-caption-menu")} />;
