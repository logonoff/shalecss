import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

/** @alpha */
export type FlexItemProps = {
    /** The flex grow value */
    flex?: 'grow' | 'half' | 'third' | 'quarter';
} | {
    /** The flex grow value as a number */
    flex: 'custom';
    /** The custom flex grow value */
    flexAmount: string;
}

/**
 * A flex item component.
 *
 * @alpha
 */
export const FlexItem: PolymorphicComponent<'div', FlexItemProps> = ({ Component = 'div', flex, flexAmount, ...props }) => (
    <Component
        {...props}
        style={flex === 'custom' ? { '--shale-v1-flex--width': flexAmount, ...(props.style || {}) } : props.style}
        className={css(
            {
                'shale-v1-flex-grow': flex === 'grow',
                'shale-v1-flex-half': flex === 'half',
                'shale-v1-flex-third': flex === 'third',
                'shale-v1-flex-quarter': flex === 'quarter',
                'shale-v1-flex-custom': flex === 'custom',
            },
            props?.className
        )}
    />
);
