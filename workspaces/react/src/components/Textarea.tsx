import { css } from "../utils/css";

/**
 * The base props for {@link Textarea}.
 *
 * @public
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * A `Textarea` component allows users to enter multi-line text.
 *
 * @example Basic textarea
 *
 * ```tsx
 * <Textarea placeholder="Enter your message..." rows={4} />;
 * ```
 *
 * @public
 */
export const Textarea: React.FC<TextareaProps> = ({ ...props }) => (
  <div className="shale-v1-input">
    <textarea {...props} className={css(props)} />
  </div>
);
