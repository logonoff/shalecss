import { clsx } from 'clsx';
import { StateVariant } from '../const/variants';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    /** The initial state of the header (if you want to force a specific state) */
    state?: StateVariant;
    /** The base component to render */
    Component?: React.ElementType;
}

export const Header: React.FC<HeaderProps> = ({ Component = 'header', state, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-header',
            { [`shale-v1--${state}`]: state },
            props?.className
        )}
    />
);

export interface HeaderTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The base component to render */
    Component?: React.ElementType;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ Component = 'div', ...props }) => (
    <Component {...props} className={clsx('shale-v1-header-title', props?.className)} />
);

export interface HeaderTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    /** The base component to render */
    Component?: React.ElementType;
}

export const HeaderText: React.FC<HeaderTextProps> = ({ Component = 'p', ...props }) => (
    <Component {...props} className={clsx('shale-v1-header-text', props?.className)} />
);
