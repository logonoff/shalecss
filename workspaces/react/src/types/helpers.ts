import type { ComponentPropsWithoutRef, ElementType, FC } from "react";

type ComponentProp<C extends ElementType> = {
    Component?: C;
};

type PolymorphicComponentProp<
    C extends ElementType,
    Props = {}
> = Props & Omit<ComponentPropsWithoutRef<C>, keyof (ComponentProp<C> & Props)> & ComponentProp<C>;

/** A helper type for a component which allows any HTML element to be used as the base component */
export type PolymorphicComponent<DefaultElement extends ElementType, P = {}> = <
    C extends ElementType = DefaultElement
>(
    props: PolymorphicComponentProp<C, Readonly<P>>
) => ReturnType<FC<P>>;
