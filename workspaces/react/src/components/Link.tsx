import { clsx } from 'clsx';
import { StateVariant } from '../const/variants';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The initial state of the link (if you want to force a specific state) */
    state?: StateVariant;
    /** The base component to render */
    Component?: React.ElementType;
}

export const Link: React.FC<LinkProps> = ({ Component = 'a', state, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-link',
            { [`shale-v1--${state}`]: state },
            props?.className
        )}
    />
);
