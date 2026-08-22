import { css } from "../utils/css";

/**
 * The base props for {@link Switch}.
 *
 * @alpha
 */
export interface SwitchProps extends Omit<
  React.ComponentProps<"input">,
  "type"
> {
  /** The type of the switch */
  type: "checkbox" | "radio";
  /** The label text for the input */
  label?: string;
  /** The id for the input (used with label) */
  id?: string;
}

/**
 * A Switch is a type of input that allows a user to toggle between "on" and
 * "off".
 *
 * @example Checkboxes and radios
 *
 * ```tsx
 * <FlexForm>
 *   <Switch type="radio" name="demo-radio" id="radio1" label="Radio1" />
 *   <Switch
 *     type="radio"
 *     name="demo-radio"
 *     id="radio2"
 *     label="Radio2"
 *     defaultChecked
 *   />
 *   <Switch
 *     type="checkbox"
 *     name="checkbox1"
 *     id="checkbox1"
 *     label="Checkbox1"
 *     defaultChecked
 *   />
 *   <Switch
 *     type="checkbox"
 *     name="checkbox2"
 *     id="checkbox2"
 *     label="Checkbox2"
 *   />
 * </FlexForm>;
 * ```
 *
 * @alpha
 */
export const Switch: React.FC<SwitchProps> = ({ label, id, ...props }) => {
  if (label && id) {
    return (
      <div className="shale-v1-switch">
        <label htmlFor={id}>{label}</label>
        <input {...props} id={id} />
      </div>
    );
  }

  return (
    <div className={css(props, "shale-v1-switch")}>
      <input {...props} />
    </div>
  );
};
