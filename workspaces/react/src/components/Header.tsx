import { clsx } from 'clsx';
import type { StateVariant } from '../types/variants';
import type { PolymorphicComponent } from '../types/helpers';

export interface BaseHeaderProps {
    /** The initial state of the header (if you want to force a specific state) */
    state?: StateVariant;
}

export const Header: PolymorphicComponent<'header', BaseHeaderProps> = ({ Component = 'header', state, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-header',
            { [`shale-v1--${state}`]: state },
            props?.className
        )}
    />
);

export const HeaderTitle: PolymorphicComponent<'div', {}> = ({ Component = 'div', ...props }) => (
    <Component {...props} className={clsx('shale-v1-header-title', props?.className)} />
);

export const HeaderText: PolymorphicComponent<'p', {}> = ({ Component = 'p', ...props }) => (
    <Component {...props} className={clsx('shale-v1-header-text', props?.className)} />
);
