/**
 * A string always representing a class name, undefined does nothing,
 * and an object represents conditional class names. The keys are the class names,
 * and the values are truthy/falsy values for if we should include them.
 */
export type ClassValue = string | undefined | Record<string, any>;

/** Utility function to conditionally join `classNames` together. Returns undefined if no classes are provided. */
export const css = (...args: ClassValue[]): string | undefined => {
  let result = "";

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    if (typeof arg === "string") {
      result = result ? result + " " + arg : arg;
    } else {
      for (const key in arg) {
        if (arg[key]) {
          result = result ? result + " " + key : key;
        }
      }
    }
  }

  return result || undefined;
};
