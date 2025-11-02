import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

export const SkipToContent: PolymorphicComponent<'a'> = ({ Component = 'a', ...props }) => (
    <Component {...props} className={css('shale-v1-skip', props?.className)} />
);
