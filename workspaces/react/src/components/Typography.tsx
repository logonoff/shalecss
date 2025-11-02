import { clsx } from 'clsx';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    /** The base component to render */
    Component?: React.ElementType;
}

export const H1: React.FC<TypographyProps> = ({ Component = 'h1', ...props }) => (
    <Component {...props} className={clsx('shale-v1-h1', props?.className)} />
);

export const H2: React.FC<TypographyProps> = ({ Component = 'h2', ...props }) => (
    <Component {...props} className={clsx('shale-v1-h2', props?.className)} />
);

export const H3: React.FC<TypographyProps> = ({ Component = 'h3', ...props }) => (
    <Component {...props} className={clsx('shale-v1-h3', props?.className)} />
);

export const H4: React.FC<TypographyProps> = ({ Component = 'h4', ...props }) => (
    <Component {...props} className={clsx('shale-v1-h4', props?.className)} />
);

export const H5: React.FC<TypographyProps> = ({ Component = 'h5', ...props }) => (
    <Component {...props} className={clsx('shale-v1-h5', props?.className)} />
);

export const H6: React.FC<TypographyProps> = ({ Component = 'h6', ...props }) => (
    <Component {...props} className={clsx('shale-v1-h6', props?.className)} />
);

export const P: React.FC<TypographyProps> = ({ Component = 'p', ...props }) => (
    <Component {...props} className={clsx('shale-v1-p', props?.className)} />
);

export const Code: React.FC<TypographyProps> = ({ Component = 'pre', ...props }) => (
    <Component {...props} className={clsx('shale-v1-code', props?.className)} />
);
