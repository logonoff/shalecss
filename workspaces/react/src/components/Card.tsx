import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';
import { FlexItem } from './FlexItem';
import { ShadowVariant } from '../types/variants';

/** @alpha */
export interface CardProps {
    /** The type of shadow to apply to the card */
    shadow?: ShadowVariant;
}

/**
 * A card component that can have different shadow styles.
 *
 * @alpha
 */
export const Card: PolymorphicComponent<typeof FlexItem, CardProps> = ({ Component = FlexItem, ...props }) => (
    <Component
        {...props}
        className={css(
            'shale-v1-card',
            { [`shale-v1--${props.shadow}`]: props.shadow },
            props?.className
        )}
    />
);
