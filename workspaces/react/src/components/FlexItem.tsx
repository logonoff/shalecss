import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * The base props for {@link FlexItem}.
 *
 * @alpha
 */
export type FlexItemProps =
  | {
      /** The flex grow value */
      flex?: "grow" | "half" | "third" | "quarter";
      /** Will collapse on mobile (768px and below) */
      collapseOnMobile?: boolean;
    }
  | {
      /** The flex grow value as a CSS value */
      flex: "custom";
      /** The custom flex grow value */
      flexAmount: string;
      /** Will collapse on mobile (768px and below) */
      collapseOnMobile?: boolean;
    };

/**
 * A `FlexItem` is a child component of a flex container. Components like
 * {@link Card} are based on this.
 *
 * @example Flex grow
 *
 * ```tsx
 * <Card flex="grow">This item will grow to fill space</Card>;
 * ```
 *
 * @example Half flex
 *
 * ```tsx
 * <FlexContainer variant="center">
 *   <Card flex="half">half</Card>
 *   <Card flex="half">half</Card>
 * </FlexContainer>;
 * ```
 *
 * @example Third flex
 *
 * ```tsx
 * <FlexContainer variant="center">
 *   <Card flex="third">third</Card>
 *   <Card flex="third">third</Card>
 *   <Card flex="third">third</Card>
 * </FlexContainer>;
 * ```
 *
 * @example Quarter flex that responds to viewport
 *
 * ```tsx
 * <FlexContainer variant="center">
 *   <Card collapseOnMobile flex="quarter">
 *     quarter
 *   </Card>
 *   <Card collapseOnMobile flex="quarter">
 *     quarter
 *   </Card>
 *   <Card collapseOnMobile flex="quarter">
 *     quarter
 *   </Card>
 *   <Card collapseOnMobile flex="quarter">
 *     quarter
 *   </Card>
 * </FlexContainer>;
 * ```
 *
 * @example Fractional flex
 *
 * ```tsx
 * <div style={{ display: "flex" }}>
 *   <Card flex="half">Half width</Card>
 *   <Card flex="half">Half width</Card>
 * </div>;
 * ```
 *
 * @example Weird flex but ok
 *
 * ```tsx
 * <div style={{ display: "flex" }}>
 *   <Card flex="custom" flexAmount="2">
 *     Grows twice as much
 *   </Card>
 *   <Card flex="custom" flexAmount="1">
 *     Grows once
 *   </Card>
 * </div>;
 * ```
 *
 * @alpha
 */
export const FlexItem: PolymorphicComponent<"div", FlexItemProps> = ({
  Component = "div",
  flex,
  flexAmount,
  collapseOnMobile,
  ...props
}) => (
  <Component
    {...props}
    style={
      flex === "custom"
        ? { "--shale-v1-flex--width": flexAmount, ...(props.style || {}) }
        : props.style
    }
    className={css(props, {
      "shale-v1-flex-grow": flex === "grow",
      "shale-v1-flex-half": flex === "half",
      "shale-v1-flex-third": flex === "third",
      "shale-v1-flex-quarter": flex === "quarter",
      "shale-v1-flex-custom": flex === "custom",
      "shale-v1-flex-collapse-on-mobile": collapseOnMobile,
    })}
  />
);
