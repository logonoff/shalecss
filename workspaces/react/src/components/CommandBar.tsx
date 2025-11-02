import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

export interface BaseCommandBarProps {
    /** Whether to make the command bar grow to fill available space */
    flexGrow?: boolean;
}

export const CommandBar: PolymorphicComponent<'div', BaseCommandBarProps> = ({ Component = 'div', flexGrow, ...props }) => (
    <Component
        {...props}
        className={css(
            'shale-v1-command-bar',
            { 'shale-v1-flex-grow': flexGrow },
            props?.className
        )}
    />
);
