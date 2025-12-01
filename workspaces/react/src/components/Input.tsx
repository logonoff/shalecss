import { css } from "../utils/css";

/** @alpha */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label text for the input */
  label?: string;
  /** The id for the input (used with label) */
  id?: string;
}

/**
 * An input component. The `type` prop is required if you want styling.
 *
 * @example Basic inputs
 * ```tsx
 * <FlexForm>
 *   <Input id="input-text" placeholder="text" type="text" />
 *   <Input id="input-password" placeholder="password" type="password" />
 *   <Input id="input-email" placeholder="email" type="email" />
 *   <Input id="input-url" placeholder="url" type="url" />
 *   <Input id="input-tel" placeholder="tel" type="tel" />
 *   <Input id="input-number" placeholder="number" type="number" />
 *   <Input id="input-search" placeholder="search" type="search" />
 *   <Input id="input-date" placeholder="date" type="date" />
 *   <Input id="input-time" placeholder="time" type="time" />
 *   <Input id="input-datetime" placeholder="datetime-local" type="datetime-local" />
 *   <Input id="input-month" placeholder="month" type="month" />
 *   <Input id="input-week" placeholder="week" type="week" />
 *   <Input id="input-color" placeholder="color" type="color" />
 *   <Input id="input-file" placeholder="file" type="file" />
 * </FlexForm>
 * ```
 *
 * @example Disabled inputs
 * ```tsx
 * <FlexForm>
 *   <Input id="input-text-disabled" disabled placeholder="text" type="text" />
 *   <Input id="input-password-disabled" disabled placeholder="password" type="password" />
 *   <Input id="input-email-disabled" disabled placeholder="email" type="email" />
 *   <Input id="input-url-disabled" disabled placeholder="url" type="url" />
 *   <Input id="input-tel-disabled" disabled placeholder="tel" type="tel" />
 *   <Input id="input-number-disabled" disabled placeholder="number" type="number" />
 *   <Input id="input-search-disabled" disabled placeholder="search" type="search" />
 *   <Input id="input-date-disabled" disabled placeholder="date" type="date" />
 *   <Input id="input-time-disabled" disabled placeholder="time" type="time" />
 *   <Input id="input-datetime-disabled" disabled placeholder="datetime-local" type="datetime-local" />
 *   <Input id="input-month-disabled" disabled placeholder="month" type="month" />
 *   <Input id="input-week-disabled" disabled placeholder="week" type="week" />
 *   <Input id="input-color-disabled" disabled placeholder="color" type="color" />
 *   <Input id="input-file-disabled" disabled placeholder="file" type="file" />
 * </FlexForm>
 * ```
 *
 * @example Input with label
 * ```tsx
 * <Input id="email" label="Email Address" type="email" />
 * ```
 *
 * @example Checkboxes and radios
 * ```tsx
 * <FlexForm>
 *   <Input type="radio" name="demo-radio" id="radio1" label="Radio1" />
 *   <Input type="radio" name="demo-radio" id="radio2" label="Radio2" defaultChecked />
 *   <Input type="checkbox" name="checkbox1" id="checkbox1" label="Checkbox1" defaultChecked />
 *   <Input type="checkbox" name="checkbox2" id="checkbox2" label="Checkbox2" />
 *   <Input type="checkbox" name="checkbox3" id="checkbox3" label="Checkbox3" />
 * </FlexForm>
 * ```
 *
 * @example Disabled checkboxes and radios
 * ```tsx
 * <FlexForm>
 *   <Input disabled type="radio" name="demo-radio" id="radio3" label="Radio3" />
 *   <Input disabled type="radio" name="demo-radio" id="radio4" label="Radio4" defaultChecked />
 *   <Input disabled type="checkbox" name="checkbox1" id="checkbox4" label="Checkbox4" defaultChecked />
 *   <Input disabled type="checkbox" name="checkbox2" id="checkbox5" label="Checkbox5" />
 *   <Input disabled type="checkbox" name="checkbox3" id="checkbox6" label="Checkbox6" />
 * </FlexForm>
 * ```
 *
 * @alpha
 */
export const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  if (label && id) {
    return (
      <div className="shale-v1-input">
        <input {...props} id={id} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }

  return (
    <div className={css("shale-v1-input", props?.className)}>
      <input {...props} />
    </div>
  );
};
