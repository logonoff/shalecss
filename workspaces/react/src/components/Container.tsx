import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * Container components provide layout structure and organization.
 *
 * @example Basic usage
 * ```tsx
 * <Container>Content goes here</Container>
 * ```
 *
 * @alpha
 */
export const Container: PolymorphicComponent<"div", {}> = ({
  Component = "div",
  ...props
}) => (
  <Component
    {...props}
    className={css("shale-v1-container", props?.className)}
  />
);

/** @alpha */
export interface BaseFlexContainerProps {
  /** The flex layout variant */
  variant?: "space-between" | "center" | "align-center";
}

/**
 * A flexible container with built-in flexbox layout variants.
 *
 * @example Space between
 * ```tsx
 * <FlexContainer variant="space-between">
 *   <FlexItem>Left</FlexItem>
 *   <FlexItem>Right</FlexItem>
 * </FlexContainer>
 * ```
 *
 * @example Center
 * ```tsx
 * <FlexContainer variant="center">
 *   <FlexItem>Centered Content</FlexItem>
 * </FlexContainer>
 * ```
 *
 * @example Align center
 * ```tsx
 * <FlexContainer variant="align-center">
 *   <FlexItem>Vertically Centered Content</FlexItem>
 * </FlexContainer>
 * ```
 *
 * @alpha
 */
export const FlexContainer: PolymorphicComponent<
  "div",
  BaseFlexContainerProps
> = ({ Component = "div", variant = "space-between", ...props }) => (
  <Component
    {...props}
    className={css(
      {
        "shale-v1-flex-space-between": variant === "space-between",
        "shale-v1-flex-center": variant === "center",
        "shale-v1-flex-align-center": variant === "align-center",
      },
      props?.className,
    )}
  />
);

/**
 * A flex form component that aligns all form items in a single line.
 *
 * @example Basic usage
 * ```tsx
 * <FlexForm onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
 *   <Input type="text" placeholder="Name" />
 *   <Input type="email" placeholder="Email" />
 *   <Button type="submit">Submit</Button>
 * </FlexForm>
 * ```
 *
 * @alpha
 */
export const FlexForm: PolymorphicComponent<"form", {}> = ({
  Component = "form",
  ...props
}) => (
  <Component
    {...props}
    className={css("shale-v1-flex-form", props?.className)}
  />
);
