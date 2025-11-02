import { clsx } from 'clsx';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    /** The base component to render */
    Component?: React.ElementType;
}

export const Footer: React.FC<FooterProps> = ({ Component = 'footer', ...props }) => (
    <Component {...props} className={clsx('shale-v1-footer', props?.className)} />
);
