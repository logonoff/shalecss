import type { ComponentPropsWithoutRef, ElementType, FC } from "react";

/**
 * Provides a `Component` prop for overriding a component's base
 *
 * @public
 */
export type ComponentProp<C extends ElementType> = {
  /**
   * Overrides the base React component / HTML element that is used for this
   * component
   */
  Component?: C;
};

/**
 * Provides the props for a polymorphic component, allowing the base component to be
 * overridden while still maintaining type safety for its props.
 *
 * @public
 */
export type PolymorphicComponentProp<
  C extends ElementType,
  Props = {},
> = Props &
  Omit<ComponentPropsWithoutRef<C>, keyof (ComponentProp<C> & Props)> &
  ComponentProp<C>;

/**
 * A helper type for a component which allows any HTML element to be used as the
 * base component
 *
 * @public
 */
export type PolymorphicComponent<DefaultElement extends ElementType, P = {}> = <
  C extends ElementType = DefaultElement,
>(
  props: PolymorphicComponentProp<C, Readonly<P>>,
) => ReturnType<FC<P>>;
