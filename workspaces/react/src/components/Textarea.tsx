import { css } from '../utils/css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ ...props }) => (
    <div className="shale-v1-input">
        <textarea {...props} className={css(props?.className)} />
    </div>
);
