import { clsx } from 'clsx';
import type { PolymorphicComponent } from '../types/helpers';

export interface BaseCardProps {
    /** Flex sizing variant */
    flex?: 'grow' | 'half' | 'third' | 'quarter';
}

export const Card: PolymorphicComponent<'div', BaseCardProps> = ({ Component = 'div', flex, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-card',
            {
                'shale-v1-flex-grow': flex === 'grow',
                'shale-v1-flex-half': flex === 'half',
                'shale-v1-flex-third': flex === 'third',
                'shale-v1-flex-quarter': flex === 'quarter',
            },
            props?.className
        )}
    />
);
