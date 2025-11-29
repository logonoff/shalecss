/**
 * Shale UI React Library
 *
 * @packageDocumentation
 */

// Core types
export type {
  PolymorphicComponent,
  PolymorphicComponentProp,
  ComponentProp,
} from "./types/helpers";
export type { StateVariant, ShadowVariant } from "./types/variants";

// Layout & Structure
export { Html } from "./components/Html";
export type { HtmlProps } from "./components/Html";

export { Container, FlexContainer, FlexForm } from "./components/Container";
export type { BaseFlexContainerProps } from "./components/Container";

export { FlexItem } from "./components/FlexItem";
export type { FlexItemProps } from "./components/FlexItem";

export { Card } from "./components/Card";
export type { CardProps } from "./components/Card";

// Typography
export { H1, H2, H3, H4, H5, H6, P, Code } from "./components/Typography";

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
export { Header, HeaderTitle, HeaderText } from "./components/Header";
export type { BaseHeaderProps } from "./components/Header";

export { Footer } from "./components/Footer";
export { Nav, MenuBarButton } from "./components/Nav";

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
