import type { PolymorphicComponent } from "../types/helpers";
import { css } from "../utils/css";

/**
 * The base props for {@link Progress}.
 *
 * @alpha
 */
export interface ProgressProps {
  /** The state of the progress bar, inheriting styles from {@link Note}. */
  variant?: "info" | "alert" | "warn" | "tip";
}

/**
 * A `Progress` is a component that displays the progress of a task or
 * operation. It includes styles for both `progress` and `meter`.
 *
 * @example Simple example
 *
 * ```tsx
 * <Container>
 *   <Progress value={20} max={100} />
 *   <Progress value={40} max={100} variant="info" />
 *   <Progress value={60} max={100} variant="warn" />
 *   <Progress value={80} max={100} variant="alert" />
 *   <Progress value={100} max={100} variant="tip" />
 * </Container>;
 * ```
 *
 * @example Indeterminate example
 *
 * ```tsx
 * <Container>
 *   <Progress />
 *   <Progress variant="info" />
 *   <Progress variant="warn" />
 *   <Progress variant="alert" />
 *   <Progress variant="tip" />
 * </Container>;
 * ```
 *
 * @example Meter example
 *
 * ```tsx
 * <Container>
 *   <Progress
 *     Component="meter"
 *     value="25"
 *     min="0"
 *     low="40"
 *     high="60"
 *     max="100"
 *     optimum="75"
 *   />
 *   <Progress
 *     Component="meter"
 *     value="50"
 *     min="0"
 *     low="40"
 *     high="60"
 *     max="100"
 *     optimum="75"
 *   />
 *   <Progress
 *     Component="meter"
 *     value="75"
 *     min="0"
 *     low="40"
 *     high="60"
 *     max="100"
 *     optimum="75"
 *   />
 * </Container>;
 * ```
 *
 * @alpha
 */
export const Progress: PolymorphicComponent<"progress", ProgressProps> = ({
  Component = "progress",
  variant,
  ...props
}) => (
  <Component
    {...props}
    className={css(
      props,
      "shale-v1-progress",
      variant && `shale-v1-progress-${variant}`,
    )}
  />
);
