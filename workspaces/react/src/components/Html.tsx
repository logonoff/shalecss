import { css } from "../utils/css";

/** @alpha */
export interface HtmlProps extends React.HTMLAttributes<HTMLHtmlElement> {
  /** The theme to apply to the document */
  theme: "light" | "dark" | "contrast";
  /** Whether to enable webkit scrollbar styles */
  webkitScrollbar?: boolean;
  /** The base component to render the html as */
  Component?: React.ElementType;
}

/**
 * An html component to set document-level styles.
 *
 * @deprecated I'm probably removing this one.
 *
 * @alpha
 */
export const Html: React.FC<HtmlProps> = ({
  Component = "html",
  theme,
  webkitScrollbar = false,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      `shale-v1-${theme}`,
      { "shale-v1-webkit-scrollbar": webkitScrollbar },
      props?.className,
    )}
  />
);
