import { clsx } from 'clsx';

export interface SkipProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The base component to render */
    Component?: React.ElementType;
}

export const Skip: React.FC<SkipProps> = ({ Component = 'a', ...props }) => (
    <Component {...props} className={clsx('shale-v1-skip', props?.className)} />
);
