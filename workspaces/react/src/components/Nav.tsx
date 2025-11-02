import { clsx } from 'clsx';
import { StateVariant } from '../const/variants';

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
    /** The base component to render */
    Component?: React.ElementType;
}

export const Nav: React.FC<NavProps> = ({ Component = 'nav', ...props }) => (
    <Component {...props} className={clsx('shale-v1-nav', props?.className)} />
);

export interface MenuBarButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Whether this menu item is the current page */
    current?: boolean;
    /** The initial state of the menu button (if you want to force a specific state) */
    state?: StateVariant;
    /** The base component to render */
    Component?: React.ElementType;
}

export const MenuBarButton: React.FC<MenuBarButtonProps> = ({ Component = 'a', current, state, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-menu-bar-button',
            { 'shale-v1-current': current },
            { [`shale-v1--${state}`]: state },
            props?.className
        )}
    />
);
