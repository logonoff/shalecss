import { clsx } from 'clsx';
import { StateVariant } from '../const/variants';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The variant of the button */
    variant?: 'secondary';
    /** The initial state of the button (if you want to force a specific state) */
    state?: StateVariant;
    /** The base component to render the button as */
    Component?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({ Component = 'button', variant = 'primary', state, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-button',
            { 'shale-v1--secondary': variant === 'secondary' },
            { [`shale-v1--${state}`]: state },
            props?.className
        )}
    />
)
