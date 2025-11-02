import { clsx } from 'clsx';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'code';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    /** The base component to render */
    variant?: TypographyVariant;
    Component?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({ variant = 'p', Component = variant, ...props }) => (
    <Component
        {...props}
        className={clsx(`shale-v1-${variant}`, props.className)}
    />
);

const makeTypography = (variant: TypographyVariant, Component: React.ElementType = variant) =>
    (props: TypographyProps) => <Typography {...props} Component={Component} variant={variant} />;

export const H1 = makeTypography('h1');
export const H2 = makeTypography('h2');
export const H3 = makeTypography('h3');
export const H4 = makeTypography('h4');
export const H5 = makeTypography('h5');
export const H6 = makeTypography('h6');
export const P = makeTypography('p');
export const Code = makeTypography('code');
