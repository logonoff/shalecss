import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";
import { Button } from "./Button";

/** @alpha */
export interface PopoverToggleProps {
  /** The ID of the `Popover`. Must be unique to other `id`s in the DOM. */
  name: string;
}

/** @alpha */
export interface PopoverContentProps {
  /** The ID of the `Popover`. Must be unique to other `id`s in the DOM. */
  name: string;
}

/**
 * Toggles a popover with the given name. The `name` must match the `name` of
 * the `PopoverContent` that you want to toggle.
 *
 * @example Custom toggle element
 *
 * ```tsx
 * <div>
 *   <PopoverToggle name="popover-toggle-example-1" Component="button">
 *     Toggle popover
 *   </PopoverToggle>
 *   <PopoverContent name="popover-toggle-example-1">
 *     This is the content of the popover.
 *   </PopoverContent>
 * </div>;
 * ```
 *
 * @alpha
 */
export const PopoverToggle: PolymorphicComponent<"div", PopoverToggleProps> = ({
  Component = Button,
  name,
  ...props
}) => (
  <Component
    {...props}
    className={css(props, "shale-v1-popover-toggle")}
    style={{ "--shale-v1-popover-anchor-name": name }}
    popoverTarget={name}
    aria-haspopup="menu"
  />
);

/**
 * Displays the contents of a popover.
 *
 * Popover children will automatically be given `flex-grow` of `1` to fill the
 * content.
 *
 * @example CommandBar with a popover
 *
 * ```tsx
 * <CommandBar>
 *   <FlexItem>
 *     <PopoverToggle name="popover-content-example-1">File</PopoverToggle>
 *     <PopoverContent name="popover-content-example-1">
 *       <li>
 *         <Button variant="secondary">New</Button>
 *       </li>
 *       <li>
 *         <Button variant="secondary">Open</Button>
 *       </li>
 *       <li>
 *         <Button variant="secondary">Save</Button>
 *       </li>
 *       <li>
 *         <Button variant="secondary">Save As</Button>
 *       </li>
 *     </PopoverContent>
 *   </FlexItem>
 * </CommandBar>;
 * ```
 *
 * @alpha
 */
export const PopoverContent: PolymorphicComponent<
  "menu",
  PopoverContentProps
> = ({ Component = "menu", name, ...props }) => (
  <Component
    popover="auto"
    {...props}
    className={css(props, "shale-v1-popover-content")}
    style={{ "--shale-v1-popover-anchor-name": name, ...props?.style }}
    id={name}
  />
);
