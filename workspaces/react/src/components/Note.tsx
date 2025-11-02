import { clsx } from 'clsx';

export interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The variant/type of note */
    variant: 'info' | 'alert' | 'warn' | 'tip';
    /** Flex sizing */
    flex?: 'quarter' | 'third' | 'half' | 'grow';
    /** The base component to render */
    Component?: React.ElementType;
}

export const Note: React.FC<NoteProps> = ({ Component = 'div', variant, flex, ...props }) => (
    <Component
        {...props}
        className={clsx(
            `shale-v1-note-${variant}`,
            {
                'shale-v1-flex-quarter': flex === 'quarter',
                'shale-v1-flex-third': flex === 'third',
                'shale-v1-flex-half': flex === 'half',
                'shale-v1-flex-grow': flex === 'grow',
            },
            props?.className
        )}
    />
);

export const NoteText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ ...props }) => (
    <p {...props} className={clsx('shale-v1-note-text', props?.className)} />
);
