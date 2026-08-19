import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";
import { FlexContainer } from "./Container";

/**
 * The base props for {@link CommandBar}.
 *
 * @alpha
 */
export interface CommandBarProps {
  /** Whether to make the command bar grow to fill available space */
  flexGrow?: boolean;
  /** Whether to add padding around the command bar */
  gutter?: boolean;
}

/**
 * A `CommandBar` provides a container for command-based UI elements, typically
 * used for toolbars or action bars.
 *
 * @example Basic usage
 *
 * ```tsx
 * <CommandBar>
 *   <Button variant="secondary">Save</Button>
 *   <Button variant="secondary">Edit</Button>
 *   <Button variant="secondary">Delete</Button>
 * </CommandBar>;
 * ```
 *
 * @alpha
 */
export const CommandBar: PolymorphicComponent<
  typeof FlexContainer,
  CommandBarProps
> = ({ Component = FlexContainer, flexGrow, gutter, ...props }) => (
  <Component
    {...props}
    className={css(
      props,
      "shale-v1-command-bar",
      { "shale-v1-flex-grow": flexGrow },
      { "shale-v1-command-bar-gutter": gutter },
    )}
  />
);
