import { css } from '../utils/css';

/** @alpha */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** The label text for the input */
    label?: string;
    /** The id for the input (used with label) */
    id?: string;
}

/**
 * An input component.
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
        <div className={css('shale-v1-input', props?.className)}>
            <input {...props} />
        </div>
    );
};
