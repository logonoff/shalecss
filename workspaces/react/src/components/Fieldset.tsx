import { css } from "../utils/css";

/**
 * The base props for {@link Fieldset}.
 *
 * @alpha
 */
export interface FieldsetProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  /** The label for the fieldset */
  label: string;
}

/**
 * A `Fieldset` is a labelled rectangular container that surrounds a set of
 * multiple related form fields.
 *
 * @example Basic example
 *
 * ```tsx
 * <FlexForm>
 *   <Fieldset label="Casbah appearance">
 *     <Input
 *       type="checkbox"
 *       id="shareef"
 *       name="shareef"
 *       label="Shareef he don't like it"
 *     />
 *     <Input
 *       type="checkbox"
 *       id="rock"
 *       name="rock"
 *       label="Rock the casbah"
 *     />
 *   </Fieldset>
 * </FlexForm>;
 * ```
 *
 * @alpha
 */
export const Fieldset: React.FC<FieldsetProps> = ({
  label,
  children,
  ...props
}) => (
  <fieldset className={css(props, "shale-v1-fieldset")} {...props}>
    <legend>{label}</legend>
    {children}
  </fieldset>
);
