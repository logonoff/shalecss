import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';
import { FlexItem } from './FlexItem';
import { ShadowVariant } from '../types/variants';

export interface CardProps {
    /** The type of shadow to apply to the card */
    shadow?: ShadowVariant;
}

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
