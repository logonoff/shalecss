import { clsx } from "clsx";

/** Utility function to conditionally join `classNames` together. Returns undefined if no classes are provided. */
export const css = (...args: Parameters<typeof clsx>) =>
  clsx(...args) || undefined;
