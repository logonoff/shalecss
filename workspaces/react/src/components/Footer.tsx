import { clsx } from 'clsx';
import type { PolymorphicComponent } from '../types/helpers';

export const Footer: PolymorphicComponent<'footer', {}> = ({ Component = 'footer', ...props }) => (
    <Component {...props} className={clsx('shale-v1-footer', props?.className)} />
);
