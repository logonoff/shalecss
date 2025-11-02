import { clsx } from 'clsx';

export interface CaptionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Whether dark mode is disabled (used for theme toggles) */
    darkDisabled?: boolean;
    /** Whether contrast mode is disabled (used for theme toggles) */
    contrastDisabled?: boolean;
    /** The base component to render */
    Component?: React.ElementType;
}

export const CaptionButton: React.FC<CaptionButtonProps> = ({ Component = 'button', darkDisabled, contrastDisabled, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-caption-button',
            { 'shale-v1-dark-disabled': darkDisabled },
            { 'shale-v1-contrast-disabled': contrastDisabled },
            props?.className
        )}
    />
);

export interface CaptionMenuProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** The base component to render */
    Component?: React.ElementType;
}

export const CaptionMenu: React.FC<CaptionMenuProps> = ({ Component = 'span', ...props }) => (
    <Component {...props} className={clsx('shale-v1-caption-menu', props?.className)} />
);
