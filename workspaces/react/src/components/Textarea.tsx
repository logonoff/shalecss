import { css } from "../utils/css";

/** @alpha */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * A textarea component.
 *
 * @example Basic textarea
 * ```tsx
 * <Textarea placeholder="Enter your message..." rows={4} />
 * ```
 *
 * @alpha
 */
export const Textarea: React.FC<TextareaProps> = ({ ...props }) => (
  <div className="shale-v1-input">
    <textarea {...props} className={css(props?.className)} />
  </div>
);
