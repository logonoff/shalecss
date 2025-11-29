import { css } from '../utils/css';
import type { PolymorphicComponent } from '../types/helpers';

/**
 * The posible variants of typography components. Corresponds to HTML tags.
 *
 * @alpha
 */
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'code';

/** @alpha */
export interface BaseTypographyProps {
    /** The variant style to apply */
    variant?: TypographyVariant;
}

/**
 * A typography component that can render different HTML tags based on the variant.
 *
 * @alpha
 */
export const Typography: PolymorphicComponent<'p', BaseTypographyProps> = ({ variant = 'p', Component = variant, ...props }) => (
    <Component
        {...props}
        className={css(`shale-v1-${variant}`, props.className)}
    />
);

/**
 * Internal helper to create specific typography components.
 */
const makeTypography = (variant: TypographyVariant, Component: React.ElementType = variant): PolymorphicComponent<typeof Component, BaseTypographyProps> =>
    (props: any) => <Typography Component={Component} {...props} variant={variant} />;

/** @alpha */
export const H1: PolymorphicComponent<'h1'> = makeTypography('h1');

/** @alpha */
export const H2: PolymorphicComponent<'h2'> = makeTypography('h2');

/** @alpha */
export const H3: PolymorphicComponent<'h3'> = makeTypography('h3');

/** @alpha */
export const H4: PolymorphicComponent<'h4'> = makeTypography('h4');

/** @alpha */
export const H5: PolymorphicComponent<'h5'> = makeTypography('h5');

/** @alpha */
export const H6: PolymorphicComponent<'h6'> = makeTypography('h6');

/** @alpha */
export const P: PolymorphicComponent<'p'> = makeTypography('p');

/** @alpha */
export const Code: PolymorphicComponent<'code'> = makeTypography('code');
