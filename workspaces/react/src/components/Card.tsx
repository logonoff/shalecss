import type { PolymorphicComponent } from "../types/helpers";
import { ShadowVariant } from "../types/variants";
import { css } from "../utils/css";
import { FlexItem } from "./FlexItem";

/** @alpha */
export interface CardProps {
  /** The type of shadow to apply to the card */
  shadow?: ShadowVariant;
}

/**
 * `Card` is a flexible container based on {@link FlexItem} that provides a
 * card-like visual presentation with optional shadow variants.
 *
 * @example Basic usage
 * ```tsx
 * <Card shadow="moderate">This is a card with a moderate shadow</Card>
 * ```
 *
 * @example With different shadows
 * ```tsx
 * <FlexContainer variant="space-between">
 *   <Card flex="third" shadow="subtle">subtle shadows</Card>
 *   <Card flex="third" shadow="moderate">moderate shadows</Card>
 *   <Card flex="third" shadow="puffy">puffy shadows</Card>
 * </FlexContainer>
 * ```
 *
 * @alpha
 */
export const Card: PolymorphicComponent<typeof FlexItem, CardProps> = ({
  Component = FlexItem,
  shadow,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      "shale-v1-card",
      { [`shale-v1--${shadow}`]: shadow },
      props?.className
    )}
  />
);
