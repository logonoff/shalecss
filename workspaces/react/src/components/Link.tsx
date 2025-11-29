import { css } from '../utils/css';
import type { StateVariant } from '../types/variants';
import type { PolymorphicComponent } from '../types/helpers';

/** @alpha */
export interface BaseLinkProps {
    /** The initial state of the link (if you want to force a specific state) */
    state?: StateVariant;
}

/**
 * A link component.
 *
 * @alpha
 */
export const Link: PolymorphicComponent<'a', BaseLinkProps> = ({ Component = 'a', state, ...props }) => (
    <Component
        {...props}
        className={css(
            'shale-v1-link',
            { [`shale-v1--${state}`]: state },
            props?.className
        )}
    />
);
