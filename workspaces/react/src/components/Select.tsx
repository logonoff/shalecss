import { css } from '../utils/css';
import type { StateVariant } from '../types/variants';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    /** The initial state of the select (if you want to force a specific state) */
    state?: StateVariant;
}

export const Select: React.FC<SelectProps> = ({ state, ...props }) => (
    <div
        className={css(
            'shale-v1-select',
            { [`shale-v1--${state}`]: state }
        )}
    >
        <select {...props} className={props?.className} />
    </div>
);
