import { clsx } from 'clsx';
import type { StateVariant } from '../types/variants';
import type { PolymorphicComponent } from '../types/helpers';

export interface BaseLinkProps {
    /** The initial state of the link (if you want to force a specific state) */
    state?: StateVariant;
}

export const Link: PolymorphicComponent<'a', BaseLinkProps> = ({ Component = 'a', state, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-link',
            { [`shale-v1--${state}`]: state },
            props?.className
        )}
    />
);
