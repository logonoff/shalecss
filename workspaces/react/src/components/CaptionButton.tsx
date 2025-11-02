import { clsx } from 'clsx';
import type { PolymorphicComponent } from '../types/helpers';

export interface BaseCaptionButtonProps {
    /** Whether dark mode is disabled (used for theme toggles) */
    darkDisabled?: boolean;
    /** Whether contrast mode is disabled (used for theme toggles) */
    contrastDisabled?: boolean;
}

export const CaptionButton: PolymorphicComponent<'button', BaseCaptionButtonProps> = ({ Component = 'button', darkDisabled, contrastDisabled, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-caption-button',
            { 'shale-v1-dark-disabled': darkDisabled },
            { 'shale-v1-contrast-disabled': contrastDisabled },
            props?.className
        )}
    />
);

export const CaptionMenu: PolymorphicComponent<'span', {}> = ({ Component = 'span', ...props }) => (
    <Component {...props} className={clsx('shale-v1-caption-menu', props?.className)} />
);
