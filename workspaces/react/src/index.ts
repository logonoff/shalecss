/**
 * `@shalecss/react` is a React component library that provides a thin wrapper
 * around `@shalecss/core` CSS styles.
 *
 * @packageDocumentation
 */

// Core types
export type {
  ComponentProp,
  PolymorphicComponent,
  PolymorphicComponentProp,
} from "./types/helpers";
export type { ShadowVariant, StateVariant } from "./types/variants";

// Layout & Structure
export { Container, FlexContainer, FlexForm } from "./components/Container";
export type { BaseFlexContainerProps } from "./components/Container";

export { FlexItem } from "./components/FlexItem";
export type { FlexItemProps } from "./components/FlexItem";

export { Card } from "./components/Card";
export type { CardProps } from "./components/Card";

// Dialog
export { Dialog } from "./components/Dialog";
export type { DialogProps } from "./components/Dialog";

// Typography
export { Code, H1, H2, H3, H4, H5, H6, P } from "./components/Typography";

// Forms & Inputs
export { Button } from "./components/Button";
export type { BaseButtonProps } from "./components/Button";

export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { Select } from "./components/Select";
export type { SelectProps } from "./components/Select";

export { Textarea } from "./components/Textarea";
export type { TextareaProps } from "./components/Textarea";

export { Link } from "./components/Link";
export type { BaseLinkProps } from "./components/Link";

// Navigation
export { Header, HeaderText, HeaderTitle } from "./components/Header";
export type { BaseHeaderProps } from "./components/Header";

export { Footer } from "./components/Footer";
export { MenuBarButton, Nav } from "./components/Nav";

export type { BaseMenuBarButtonProps } from "./components/Nav";
export { SkipToContent } from "./components/SkipToContent";

// UI Components
export { Icon } from "./components/Icon";
export type { IconProps } from "./components/Icon";

export { Note, NoteText } from "./components/Note";
export type { NoteProps } from "./components/Note";

export { CommandBar } from "./components/CommandBar";
export type { BaseCommandBarProps } from "./components/CommandBar";

export { CaptionButton, CaptionMenu } from "./components/CaptionButton";
