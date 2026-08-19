import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/**
 * The base props for {@link Select}.
 *
 * @public
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** The initial state of the select (if you want to force a specific state) */
  state?: StateVariant;
}

/**
 * A `Select` component allows selection of multiple options.
 *
 * @example Basic select
 *
 * ```tsx
 * <Select>
 *   <option value="1">Option 1</option>
 *   <option value="2">Option 2</option>
 *   <option value="3">Option 3</option>
 * </Select>;
 * ```
 *
 * @public
 */
export const Select: React.FC<SelectProps> = ({ state, ...props }) => (
  <div
    className={css(props, "shale-v1-select", { [`shale-v1--${state}`]: state })}
  >
    <select {...props} className={props?.className} />
  </div>
);
