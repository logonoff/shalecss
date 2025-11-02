import { clsx } from 'clsx';

export interface CommandBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Whether to make the command bar grow to fill available space */
    flexGrow?: boolean;
    /** The base component to render */
    Component?: React.ElementType;
}

export const CommandBar: React.FC<CommandBarProps> = ({ Component = 'div', flexGrow, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-command-bar',
            { 'shale-v1-flex-grow': flexGrow },
            props?.className
        )}
    />
);
