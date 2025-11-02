import { clsx } from 'clsx';
import type { PolymorphicComponent } from '../types/helpers';

export const Container: PolymorphicComponent<'div', {}> = ({ Component = 'div', ...props }) => (
    <Component {...props} className={clsx('shale-v1-container', props?.className)} />
);

export interface BaseFlexContainerProps {
    /** The flex layout variant */
    variant?: 'space-between' | 'center' | 'align-center';
}

export const FlexContainer: PolymorphicComponent<'div', BaseFlexContainerProps> = ({ Component = 'div', variant = 'space-between', ...props }) => (
    <Component
        {...props}
        className={clsx(
            {
                'shale-v1-flex-space-between': variant === 'space-between',
                'shale-v1-flex-center': variant === 'center',
                'shale-v1-flex-align-center': variant === 'align-center',
            },
            props?.className
        )}
    />
);

export const FlexForm: PolymorphicComponent<'form', {}> = ({ Component = 'form', ...props }) => (
    <Component {...props} className={clsx('shale-v1-flex-form', props?.className)} />
);
