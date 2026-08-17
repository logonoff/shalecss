/**
 * A string always representing a class name, undefined does nothing, and an
 * object represents conditional class names. The keys are the class names, and
 * the values are truthy/falsy values for if we should include them.
 */
export type ClassValue = string | undefined | Record<string, any>;

/**
 * Utility function to conditionally join `classNames` together.
 *
 * @param props component props for parsing `class` and `className`
 * @param classes additional class names to conditionally join
 *
 * @returns undefined if no classes are provided.
 */
export const css = (props: { [key: string]: any } = {}, ...classes: ClassValue[]): string | undefined => {
  let result = "";

  const args = [props?.class, props?.className, ...classes];

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
