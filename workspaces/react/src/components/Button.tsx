import { css } from '../utils/css';
import type { StateVariant } from '../types/variants';
import type { PolymorphicComponent } from '../types/helpers';

/** @alpha */
export interface BaseButtonProps {
    /** The variant of the button */
    variant?: 'primary' | 'secondary';
    /** The initial state of the button (if you want to force a specific state) */
    state?: StateVariant;
};

/**
 * A button component that supports different variants and states.
 *
 * @alpha
 */
export const Button: PolymorphicComponent<'button', BaseButtonProps> = ({ Component = 'button', variant = 'primary', state, ...props }) => {
    return (
        <Component
            {...props}
            className={css(
                'shale-v1-button',
                { 'shale-v1--secondary': variant === 'secondary' },
                { [`shale-v1--${state}`]: state },
                props?.className
            )}
        />
    );
}
