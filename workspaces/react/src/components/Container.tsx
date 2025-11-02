import { clsx } from 'clsx';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The base component to render */
    Component?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({ Component = 'div', ...props }) => (
    <Component {...props} className={clsx('shale-v1-container', props?.className)} />
);

export interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The flex layout variant */
    variant?: 'space-between' | 'center' | 'align-center';
    /** The base component to render */
    Component?: React.ElementType;
}

export const FlexContainer: React.FC<FlexContainerProps> = ({ Component = 'div', variant = 'space-between', ...props }) => (
    <Component
        {...props}
        className={clsx(
            {
                'shale-v1-flex-space-between': variant === 'space-between',
                'shale-v1-flex-center': variant === 'center',
                'shale-v1-flex-align-center': variant === 'align-center',
            },
            props?.className
        )}
    />
);

export interface FlexFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const FlexForm: React.FC<FlexFormProps> = ({ ...props }) => (
    <form {...props} className={clsx('shale-v1-flex-form', props?.className)} />
);
