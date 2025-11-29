import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

/**
 * A caption button component.
 *
 * @alpha
 */
export const CaptionButton: PolymorphicComponent<'button'> = ({ Component = 'button', ...props }) => (
    <Component
        {...props}
        className={css(
            'shale-v1-caption-button',
            props?.className
        )}
    />
);

/**
 * A container for caption menu items.
 *
 * @alpha
 */
export const CaptionMenu: PolymorphicComponent<'span', {}> = ({ Component = 'span', ...props }) => (
    <Component {...props} className={css('shale-v1-caption-menu', props?.className)} />
);
