import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * The possible variants of typography components. Corresponds to HTML tags.
 *
 * @public
 */
export type TypographyVariant =
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "code";

/**
 * The props for all typography components.
 *
 * @public
 */
export interface TypographyProps {
  /** The variant style to apply */
  variant?: TypographyVariant;
}

/**
 * A typography component that can render different HTML tags based on the
 * variant.
 */
const Typography: PolymorphicComponent<"p", TypographyProps> = ({
  variant = "p",
  Component = variant,
  ...props
}) => <Component {...props} className={css(props, `shale-v1-${variant}`)} />;

/** Internal helper to create specific typography components. */
const makeTypography =
  (
    variant: TypographyVariant,
    Component: React.ElementType = variant,
  ): PolymorphicComponent<typeof Component, TypographyProps> =>
  (props: any) => (
    <Typography Component={Component} {...props} variant={variant} />
  );

/**
 * An `H1` is a heading level 1 component.
 *
 * @example Basic usage
 *
 * ```tsx
 * <H1>Main Page Title</H1>;
 * ```
 *
 * @public
 */
export const H1: PolymorphicComponent<"h1"> = makeTypography("h1");

/**
 * An `H2` is a heading level 2 component.
 *
 * @example Basic usage
 *
 * ```tsx
 * <H2>Section Title</H2>;
 * ```
 *
 * @public
 */
export const H2: PolymorphicComponent<"h2"> = makeTypography("h2");

/**
 * An `H3` is a heading level 3 component.
 *
 * @example Basic usage
 *
 * ```tsx
 * <H3>Subsection Title</H3>;
 * ```
 *
 * @public
 */
export const H3: PolymorphicComponent<"h3"> = makeTypography("h3");

/**
 * An `H4` is a heading level 4 component.
 *
 * @example Basic usage
 *
 * ```tsx
 * <H4>Minor Heading</H4>;
 * ```
 *
 * @public
 */
export const H4: PolymorphicComponent<"h4"> = makeTypography("h4");

/**
 * An `H5` is a heading level 5 component.
 *
 * @example Basic usage
 *
 * ```tsx
 * <H5>Small Heading</H5>;
 * ```
 *
 * @public
 */
export const H5: PolymorphicComponent<"h5"> = makeTypography("h5");

/**
 * An `H6` is a heading level 6 component.
 *
 * @example Basic usage
 *
 * ```tsx
 * <H6>Smallest Heading</H6>;
 * ```
 *
 * @public
 */
export const H6: PolymorphicComponent<"h6"> = makeTypography("h6");

/**
 * A `P` is a paragraph component.
 *
 * @example Basic usage
 *
 * ```tsx
 * <P>This is a paragraph of text.</P>;
 * ```
 *
 * @public
 */
export const P: PolymorphicComponent<"p"> = makeTypography("p");

/**
 * A `Code` shows inline code or code blocks.
 *
 * @example Basic usage
 *
 * ```tsx
 * <P>
 *   Use the <Code>npm install</Code> command to install dependencies.
 * </P>;
 * ```
 *
 * @example Block code
 *
 * ```tsx
 * <Code Component="pre">
 *   def get_a_million_dollars(): return P == NP
 *   print(get_a_million_dollars())
 * </Code>;
 * ```
 *
 * @public
 */
export const Code: PolymorphicComponent<"code"> = makeTypography("code");
