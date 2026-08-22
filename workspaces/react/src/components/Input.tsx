import { css } from "../utils/css";

/**
 * The base props for {@link Input}.
 *
 * @public
 */
export interface InputProps extends React.ComponentProps<"input"> {
  /** The label text for the input */
  label?: string;
  /** The id for the input (used with label) */
  id?: string;
}

/**
 * An `Input` allows users to enter data into a form. As it wraps the HTML
 * `<input>` element, the `type` attribute is required.
 *
 * @example Basic inputs
 *
 * ```tsx
 * <FlexForm onSubmit={(e) => e.preventDefault()}>
 *   {[
 *     "button",
 *     "color",
 *     "date",
 *     "datetime-local",
 *     "email",
 *     "file",
 *     "hidden",
 *     "month",
 *     "number",
 *     "password",
 *     "range",
 *     "reset",
 *     "search",
 *     "submit",
 *     "tel",
 *     "text",
 *     "time",
 *     "url",
 *     "week",
 *   ].map((type) => (
 *     <Input
 *       key={type}
 *       id={`input-${type}`}
 *       placeholder={type}
 *       type={type}
 *     />
 *   ))}
 * </FlexForm>;
 * ```
 *
 * @example Disabled inputs
 *
 * ```tsx
 * <FlexForm>
 *   {[
 *     "button",
 *     "color",
 *     "date",
 *     "datetime-local",
 *     "email",
 *     "file",
 *     "hidden",
 *     "month",
 *     "number",
 *     "password",
 *     "range",
 *     "reset",
 *     "search",
 *     "submit",
 *     "tel",
 *     "text",
 *     "time",
 *     "url",
 *     "week",
 *   ].map((type) => (
 *     <Input
 *       key={type}
 *       id={`input-${type}-disabled`}
 *       disabled
 *       placeholder={type}
 *       type={type}
 *     />
 *   ))}
 * </FlexForm>;
 * ```
 *
 * @example Input with label
 *
 * ```tsx
 * <Input id="email" label="Email Address" type="email" />;
 * ```
 *
 * @example Checkboxes and radios
 *
 * ```tsx
 * <FlexForm
 *   onReset={() =>
 *     (document.getElementById("checkbox2").indeterminate = true)
 *   }
 * >
 *   <Input type="radio" name="demo-radio" id="radio1" label="Radio1" />
 *   <Input
 *     type="radio"
 *     name="demo-radio"
 *     id="radio2"
 *     label="Radio2"
 *     defaultChecked
 *   />
 *   <Input
 *     type="checkbox"
 *     name="checkbox1"
 *     id="checkbox1"
 *     label="Checkbox1"
 *     defaultChecked
 *   />
 *   <Input
 *     type="checkbox"
 *     name="checkbox2"
 *     id="checkbox2"
 *     label="Checkbox2"
 *   />
 *   <Input
 *     type="checkbox"
 *     name="checkbox3"
 *     id="checkbox3"
 *     label="Checkbox3"
 *   />
 *   <Button type="reset">Add indeterminate</Button>
 * </FlexForm>;
 * ```
 *
 * @example Disabled checkboxes and radios
 *
 * ```tsx
 * <FlexForm
 *   onReset={() =>
 *     (document.getElementById("checkbox5").indeterminate = true)
 *   }
 * >
 *   <Input
 *     disabled
 *     type="radio"
 *     name="demo-radio"
 *     id="radio3"
 *     label="Radio3"
 *   />
 *   <Input
 *     disabled
 *     type="radio"
 *     name="demo-radio"
 *     id="radio4"
 *     label="Radio4"
 *     defaultChecked
 *   />
 *   <Input
 *     disabled
 *     type="checkbox"
 *     name="checkbox1"
 *     id="checkbox4"
 *     label="Checkbox4"
 *     defaultChecked
 *   />
 *   <Input
 *     disabled
 *     type="checkbox"
 *     name="checkbox2"
 *     id="checkbox5"
 *     label="Checkbox5"
 *   />
 *   <Input
 *     disabled
 *     type="checkbox"
 *     name="checkbox3"
 *     id="checkbox6"
 *     label="Checkbox6"
 *   />
 *   <Button type="reset">Add indeterminate</Button>
 * </FlexForm>;
 * ```
 *
 * @public
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
    <div className={css(props, "shale-v1-input")}>
      <input {...props} />
    </div>
  );
};
