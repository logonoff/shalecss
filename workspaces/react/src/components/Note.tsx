import { css } from '../utils/css';
import { FlexItem } from './FlexItem';
import type { PolymorphicComponent } from '../types/helpers';

export interface NoteProps {
    /** The variant/type of note */
    variant: 'info' | 'alert' | 'warn' | 'tip';
}

export const Note: PolymorphicComponent<typeof FlexItem, NoteProps> = ({ Component = FlexItem, variant, ...props }) => (
    <Component
        {...props}
        className={css(
            `shale-v1-note-${variant}`,
            props?.className
        )}
    />
);

export const NoteText: PolymorphicComponent<'p', {}> = ({ Component = 'p', ...props }) => (
    <Component {...props} className={css('shale-v1-note-text', props?.className)} />
);
