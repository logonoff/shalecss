import type { ComponentPropsWithoutRef, ElementType, FC } from "react";

/** @alpha */
export type ComponentProp<C extends ElementType> = {
  /** Overrides the base React component / HTML element that is used for this component */
  Component?: C;
};

/** @alpha */
export type PolymorphicComponentProp<
  C extends ElementType,
  Props = {},
> = Props &
  Omit<ComponentPropsWithoutRef<C>, keyof (ComponentProp<C> & Props)> &
  ComponentProp<C>;

/**
 * A helper type for a component which allows any HTML element to be used as the base component
 * @alpha
 */
export type PolymorphicComponent<DefaultElement extends ElementType, P = {}> = <
  C extends ElementType = DefaultElement,
>(
  props: PolymorphicComponentProp<C, Readonly<P>>,
) => ReturnType<FC<P>>;
