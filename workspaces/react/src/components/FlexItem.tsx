import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

export interface FlexItemProps {
    /** The flex grow value */
    flex?: 'grow' | 'half' | 'third' | 'quarter';
}

export const FlexItem: PolymorphicComponent<'div', FlexItemProps> = ({ Component = 'div', flex, ...props }) => (
    <Component
        {...props}
        className={css(
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
