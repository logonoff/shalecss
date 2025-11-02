import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

export const CaptionButton: PolymorphicComponent<'button'> = ({ Component = 'button', darkDisabled, contrastDisabled, ...props }) => (
    <Component
        {...props}
        className={css(
            'shale-v1-caption-button',
            props?.className
        )}
    />
);

export const CaptionMenu: PolymorphicComponent<'span', {}> = ({ Component = 'span', ...props }) => (
    <Component {...props} className={css('shale-v1-caption-menu', props?.className)} />
);
