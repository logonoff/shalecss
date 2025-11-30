import type { StateVariant } from "../types/variants";
import { css } from "../utils/css";

/** @alpha */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** The initial state of the select (if you want to force a specific state) */
  state?: StateVariant;
}

/**
 * A select component.
 *
 * @example Basic select
 * ```tsx
 * <Select>
 *   <option value="1">Option 1</option>
 *   <option value="2">Option 2</option>
 *   <option value="3">Option 3</option>
 * </Select>
 * ```
 *
 * @alpha
 */
export const Select: React.FC<SelectProps> = ({ state, ...props }) => (
  <div className={css("shale-v1-select", { [`shale-v1--${state}`]: state })}>
    <select {...props} className={props?.className} />
  </div>
);
