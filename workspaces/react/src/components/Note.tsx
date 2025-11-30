import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";
import { FlexItem } from "./FlexItem";

/** @alpha */
export interface NoteProps {
  /** The variant/type of note */
  variant: "info" | "alert" | "warn" | "tip";
}

/**
 * A note component to highlight important information.
 *
 * @example Info note
 * ```tsx
 * <Note variant="info">
 *   <Icon icon="info" /> <strong>Note</strong>
 *   <NoteText>This is an informational note.</NoteText>
 * </Note>
 * ```
 *
 * @example Alert note
 * ```tsx
 * <Note variant="alert">
 *   <Icon icon="warning" /> <strong>Alert</strong>
 *   <NoteText>This is an alert message!</NoteText>
 * </Note>
 * ```
 *
 * @example Warning note
 * ```tsx
 * <Note variant="warn">
 *   <Icon icon="danger" /> <strong>Warning</strong>
 *   <NoteText>This is a warning message.</NoteText>
 * </Note>
 * ```
 *
 * @example Tip note
 * ```tsx
 * <Note variant="tip">
 *   <Icon icon="lightbulb" /> <strong>Tip</strong>
 *   <NoteText>This is a helpful tip.</NoteText>
 * </Note>
 * ```
 *
 * @alpha
 */
export const Note: PolymorphicComponent<typeof FlexItem, NoteProps> = ({
  Component = FlexItem,
  variant,
  ...props
}) => (
  <Component
    {...props}
    className={css(`shale-v1-note-${variant}`, props?.className)}
  />
);

/**
 * A text component for the content inside a Note.
 *
 * @example Basic usage
 * ```tsx
 * <NoteText>Content inside a note.</NoteText>
 * ```
 *
 * @alpha
 */
export const NoteText: PolymorphicComponent<"p", {}> = ({
  Component = "p",
  ...props
}) => (
  <Component
    {...props}
    className={css("shale-v1-note-text", props?.className)}
  />
);
