import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'code';

export interface BaseTypographyProps {
    /** The variant style to apply */
    variant?: TypographyVariant;
}

export const Typography: PolymorphicComponent<'p', BaseTypographyProps> = ({ variant = 'p', Component = variant, ...props }) => (
    <Component
        {...props}
        className={css(`shale-v1-${variant}`, props.className)}
    />
);

const makeTypography = (variant: TypographyVariant, Component: React.ElementType = variant): PolymorphicComponent<typeof Component, BaseTypographyProps> =>
    (props: any) => <Typography Component={Component} {...props} variant={variant} />;

export const H1 = makeTypography('h1');
export const H2 = makeTypography('h2');
export const H3 = makeTypography('h3');
export const H4 = makeTypography('h4');
export const H5 = makeTypography('h5');
export const H6 = makeTypography('h6');
export const P = makeTypography('p');
export const Code = makeTypography('code');
