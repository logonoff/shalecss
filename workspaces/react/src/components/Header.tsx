import { css } from '../utils/css';
import type { StateVariant } from '../types/variants';
import type { PolymorphicComponent } from '../types/helpers';

/** @alpha */
export interface BaseHeaderProps {
    /** The initial state of the header (if you want to force a specific state) */
    state?: StateVariant;
}

/**
 * A header component.
 *
 * @alpha
 */
export const Header: PolymorphicComponent<'header', BaseHeaderProps> = ({ Component = 'header', state, ...props }) => (
    <Component
        {...props}
        className={css(
            'shale-v1-header',
            { [`shale-v1--${state}`]: state },
            props?.className
        )}
    />
);

/**
 * A header title component.
 *
 * @alpha
 */
export const HeaderTitle: PolymorphicComponent<'div', {}> = ({ Component = 'div', ...props }) => (
    <Component {...props} className={css('shale-v1-header-title', props?.className)} />
);

/**
 * A header text component.
 *
 * @alpha
 */
export const HeaderText: PolymorphicComponent<'p', {}> = ({ Component = 'p', ...props }) => (
    <Component {...props} className={css('shale-v1-header-text', props?.className)} />
);
