import { css } from "../utils/css";

/** @alpha */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** The icon ID from the icons.svg sprite */
  icon: string;
  /** Whether to flip the icon horizontally */
  flipX?: boolean;
  /** Whether to flip the icon vertically */
  flipY?: boolean;
  /** The path to the icons.svg file */
  iconPath?: string;
}

/**
 * The `Icon` component displays SVG icons from an icon sprite sheet using SVG's `<use>` element.
 *
 * @example Basic icon
 * ```tsx
 * <Icon icon="search" />
 * ```
 *
 * @example Flipped icon
 * ```tsx
 * <Icon icon="search" flipX flipY />
 * ```
 *
 * @example All icons provided by default
 * ```tsx
 * <FlexContainer variant="space-between">
 *   <Icon icon="a-lowercase" />
 *   <Icon icon="a-uppercase" />
 *   <Icon icon="accessibility" />
 *   <Icon icon="blocked" />
 *   <Icon icon="brightness-contrast" />
 *   <Icon icon="bubbles" />
 *   <Icon icon="contrast" />
 *   <Icon icon="danger" />
 *   <Icon icon="discord" />
 *   <Icon icon="download" />
 *   <Icon icon="earth" />
 *   <Icon icon="embed" />
 *   <Icon icon="enlarge" />
 *   <Icon icon="github" />
 *   <Icon icon="hashtag" />
 *   <Icon icon="info" />
 *   <Icon icon="lightbulb" />
 *   <Icon icon="link" />
 *   <Icon icon="minus-circle" />
 *   <Icon icon="minus" />
 *   <Icon icon="moon-fill" />
 *   <Icon icon="moon-stroke" />
 *   <Icon icon="newtab" />
 *   <Icon icon="notification" />
 *   <Icon icon="plus-circle" />
 *   <Icon icon="plus" />
 *   <Icon icon="power" />
 *   <Icon icon="quotes-left" />
 *   <Icon icon="quotes-right" />
 *   <Icon icon="reddit" />
 *   <Icon icon="rss" />
 *   <Icon icon="search" />
 *   <Icon icon="shrink" />
 *   <Icon icon="stackoverflow" />
 *   <Icon icon="star-empty" />
 *   <Icon icon="sun" />
 *   <Icon icon="upload" />
 *   <Icon icon="warning" />
 *   <Icon icon="windows" />
 *   <Icon icon="windows8" />
 *   <Icon icon="youtube" />
 * </FlexContainer>
 * ```
 *
 * @alpha
 */
export const Icon: React.FC<IconProps> = ({
  icon,
  flipX,
  flipY,
  iconPath = "/icons.svg",
  ...props
}) => (
  <svg
    {...props}
    className={css(
      "shale-v1-icon",
      {
        "shale-v1-icon-flip-x": flipX,
        "shale-v1-icon-flip-y": flipY,
      },
      props?.className,
    )}
  >
    <use xlinkHref={`${iconPath}#icon-${icon}`} />
  </svg>
);
