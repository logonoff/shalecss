import type { PolymorphicComponent } from "../types/helpers";
import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/** @alpha */
export interface BaseButtonProps {
  /** The variant of the button */
  variant?: "primary" | "secondary";
  /** The initial state of the button (if you want to force a specific state) */
  state?: StateVariant;
}

/**
 * The `Button` component is based off of the HTML `<button>` element and can be
 * used to trigger actions when clicked.
 *
 * @example Simple Button
 * ```tsx
 * <Button variant="primary">Click Me</Button>
 * ```
 *
 * @alpha
 */
export const Button: PolymorphicComponent<"button", BaseButtonProps> = ({
  Component = "button",
  variant = "primary",
  state,
  ...props
}) => {
  return (
    <Component
      {...props}
      className={css(
        "shale-v1-button",
        { "shale-v1--secondary": variant === "secondary" },
        { [`shale-v1--${state}`]: state },
        props?.className
      )}
    />
  );
};
