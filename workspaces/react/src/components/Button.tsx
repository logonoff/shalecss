import { clsx } from 'clsx';
import type { StateVariant } from '../types/variants';
import type { PolymorphicComponent } from '../types/helpers';

export interface BaseButtonProps {
    /** The variant of the button */
    variant?: 'primary' | 'secondary';
    /** The initial state of the button (if you want to force a specific state) */
    state?: StateVariant;
};

export const Button: PolymorphicComponent<'button', BaseButtonProps> = ({ Component = 'button', variant = 'primary', state, ...props }) => {
    return (
        <Component
            {...props}
            className={clsx(
                'shale-v1-button',
                { 'shale-v1--secondary': variant === 'secondary' },
                { [`shale-v1--${state}`]: state },
                props?.className
            )}
        />
    );
}
