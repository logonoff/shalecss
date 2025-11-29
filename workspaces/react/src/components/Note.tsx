import { css } from '../utils/css';
import { FlexItem } from './FlexItem';
import type { PolymorphicComponent } from '../types/helpers';

/** @alpha */
export interface NoteProps {
    /** The variant/type of note */
    variant: 'info' | 'alert' | 'warn' | 'tip';
}

/**
 * A note component to highlight important information.
 *
 * @alpha
 */
export const Note: PolymorphicComponent<typeof FlexItem, NoteProps> = ({ Component = FlexItem, variant, ...props }) => (
    <Component
        {...props}
        className={css(
            `shale-v1-note-${variant}`,
            props?.className
        )}
    />
);

/**
 * A text component for the content inside a Note.
 *
 * @alpha
 */
export const NoteText: PolymorphicComponent<'p', {}> = ({ Component = 'p', ...props }) => (
    <Component {...props} className={css('shale-v1-note-text', props?.className)} />
);
