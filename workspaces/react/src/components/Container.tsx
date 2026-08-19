import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * A `Container` components provides a simple layout for organizing content.
 *
 * @example Basic usage
 *
 * ```tsx
 * <Container>Content goes here</Container>;
 * ```
 *
 * @alpha
 */
export const Container: PolymorphicComponent<"div", {}> = ({
  Component = "div",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-container")} />;

/**
 * The base props for {@link FlexContainer}.
 *
 * @alpha
 */
export interface FlexContainerProps {
  /** The flex layout variant */
  variant?: "space-between" | "center" | "align-center";
}

/**
 * A `FlexContainer` is a flexbox-based container with built-in layout variants.
 *
 * @example Space between
 *
 * ```tsx
 * <FlexContainer variant="space-between">
 *   <FlexItem>Left</FlexItem>
 *   <FlexItem>Right</FlexItem>
 * </FlexContainer>;
 * ```
 *
 * @example Center
 *
 * ```tsx
 * <FlexContainer variant="center">
 *   <FlexItem>Centered Content</FlexItem>
 * </FlexContainer>;
 * ```
 *
 * @example Align center
 *
 * ```tsx
 * <FlexContainer variant="align-center">
 *   <FlexItem>Vertically Centered Content</FlexItem>
 * </FlexContainer>;
 * ```
 *
 * @alpha
 */
export const FlexContainer: PolymorphicComponent<"div", FlexContainerProps> = ({
  Component = "div",
  variant,
  ...props
}) => (
  <Component
    {...props}
    className={css(props, {
      "shale-v1-flex-space-between": variant === "space-between",
      "shale-v1-flex-center": variant === "center",
      "shale-v1-flex-align-center": variant === "align-center",
    })}
  />
);

/**
 * A `FlexForm` is a flex form component that aligns all form items in a single
 * line.
 *
 * @example Basic usage
 *
 * ```tsx
 * <FlexForm
 *   onSubmit={(e) => {
 *     e.preventDefault();
 *     alert("Form submitted!");
 *   }}
 * >
 *   <Input type="text" placeholder="Name" />
 *   <Input type="email" placeholder="Email" />
 *   <Select>
 *     <option value="option1">Option 1</option>
 *     <option value="option2">Option 2</option>
 *   </Select>
 *   <Button type="submit">Submit</Button>
 * </FlexForm>;
 * ```
 *
 * @alpha
 */
export const FlexForm: PolymorphicComponent<"form", {}> = ({
  Component = "form",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-flex-form")} />;
