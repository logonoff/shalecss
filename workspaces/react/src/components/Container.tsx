import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

/**
 * A container component.
 *
 * @alpha
 */
export const Container: PolymorphicComponent<'div', {}> = ({ Component = 'div', ...props }) => (
    <Component {...props} className={css('shale-v1-container', props?.className)} />
);

/** @alpha */
export interface BaseFlexContainerProps {
    /** The flex layout variant */
    variant?: 'space-between' | 'center' | 'align-center';
}

/**
 * A flex container component.
 *
 * @alpha
 */
export const FlexContainer: PolymorphicComponent<'div', BaseFlexContainerProps> = ({ Component = 'div', variant = 'space-between', ...props }) => (
    <Component
        {...props}
        className={css(
            {
                'shale-v1-flex-space-between': variant === 'space-between',
                'shale-v1-flex-center': variant === 'center',
                'shale-v1-flex-align-center': variant === 'align-center',
            },
            props?.className
        )}
    />
);

/**
 * A flex form component.
 *
 * @alpha
 */
export const FlexForm: PolymorphicComponent<'form', {}> = ({ Component = 'form', ...props }) => (
    <Component {...props} className={css('shale-v1-flex-form', props?.className)} />
);
