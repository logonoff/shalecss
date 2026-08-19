import type { PolymorphicComponent } from "../types/helpers";
import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/**
 * The base props for {@link Button}.
 *
 * @beta
 */
export interface ButtonProps {
  /** The variant of the button */
  variant?: "primary" | "secondary";
  /** The initial state of the button (if you want to force a specific state) */
  state?: StateVariant;
}

/**
 * A `Button` is used to trigger actions when clicked.
 *
 * @example Simple Button
 *
 * ```tsx
 * <Button variant="primary">Click Me</Button>;
 * ```
 *
 * @example With icon
 *
 * ```tsx
 * <Button state="active">
 *   <Icon icon="download" />
 *   Download
 * </Button>;
 * ```
 *
 * @beta
 */
export const Button: PolymorphicComponent<"button", ButtonProps> = ({
  Component = "button",
  variant = "primary",
  state,
  ...props
}) => {
  return (
    <Component
      {...props}
      className={css(
        props,
        "shale-v1-button",
        { "shale-v1--secondary": variant === "secondary" },
        { [`shale-v1--${state}`]: state },
      )}
    />
  );
};
