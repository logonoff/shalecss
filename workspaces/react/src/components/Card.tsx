import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Flex sizing variant */
    flex?: 'grow' | 'half' | 'third' | 'quarter';
    /** The base component to render */
    Component?: React.ElementType;
}

export const Card: React.FC<CardProps> = ({ Component = 'div', flex, ...props }) => (
    <Component
        {...props}
        className={clsx(
            'shale-v1-card',
            {
                'shale-v1-flex-grow': flex === 'grow',
                'shale-v1-flex-half': flex === 'half',
                'shale-v1-flex-third': flex === 'third',
                'shale-v1-flex-quarter': flex === 'quarter',
            },
            props?.className
        )}
    />
);
