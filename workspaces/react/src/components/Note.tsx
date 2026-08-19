import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";
import { FlexItem } from "./FlexItem";

/**
 * The base props for {@link Note}.
 *
 * @alpha
 */
export interface NoteProps {
  /** The variant/type of note */
  variant: "info" | "alert" | "warn" | "tip";
}

/**
 * A Note highlights important information.
 *
 * @example Info note
 *
 * ```tsx
 * <Note variant="info">
 *   <Icon icon="info" /> <strong>Note</strong>
 *   <NoteText>This is an informational note.</NoteText>
 * </Note>;
 * ```
 *
 * @example Alert note
 *
 * ```tsx
 * <Note variant="alert">
 *   <Icon icon="warning" /> <strong>Alert</strong>
 *   <NoteText>This is an alert message!</NoteText>
 * </Note>;
 * ```
 *
 * @example Warning note
 *
 * ```tsx
 * <Note variant="warn">
 *   <Icon icon="danger" /> <strong>Warning</strong>
 *   <NoteText>This is a warning message.</NoteText>
 * </Note>;
 * ```
 *
 * @example Tip note
 *
 * ```tsx
 * <Note variant="tip">
 *   <Icon icon="lightbulb" /> <strong>Tip</strong>
 *   <NoteText>This is a helpful tip.</NoteText>
 * </Note>;
 * ```
 *
 * @alpha
 */
export const Note: PolymorphicComponent<typeof FlexItem, NoteProps> = ({
  Component = FlexItem,
  variant,
  ...props
}) => (
  <Component {...props} className={css(props, `shale-v1-note-${variant}`)} />
);

/**
 * A `NoteText` displays text content inside a {@link Note}.
 *
 * @example Basic usage
 *
 * ```tsx
 * <NoteText>Content inside a note.</NoteText>;
 * ```
 *
 * @alpha
 */
export const NoteText: PolymorphicComponent<"p", {}> = ({
  Component = "p",
  ...props
}) => <Component {...props} className={css(props, "shale-v1-note-text")} />;
