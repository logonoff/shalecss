import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

/**
 * A footer component.
 *
 * @alpha
 */
export const Footer: PolymorphicComponent<'footer', {}> = ({ Component = 'footer', ...props }) => (
    <Component {...props} className={css('shale-v1-footer', props?.className)} />
);
