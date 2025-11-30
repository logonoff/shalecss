import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/** @alpha */
export interface BaseCommandBarProps {
  /** Whether to make the command bar grow to fill available space */
  flexGrow?: boolean;
}

/**
 * The `CommandBar` component provides a container for command-based UI elements,
 * typically used for toolbars or action bars.
 *
 * @example Basic usage
 * ```tsx
 * <CommandBar>
 *   <Button variant="secondary">Save</Button>
 *   <Button variant="secondary">Edit</Button>
 *   <Button variant="secondary">Delete</Button>
 * </CommandBar>
 * ```
 *
 * @alpha
 */
export const CommandBar: PolymorphicComponent<"div", BaseCommandBarProps> = ({
  Component = "div",
  flexGrow,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      "shale-v1-command-bar",
      { "shale-v1-flex-grow": flexGrow },
      props?.className
    )}
  />
);
