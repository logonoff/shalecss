import { css } from "../utils/css";
import type { PolymorphicComponent } from "../types/helpers";

/**
 * A footer component for displaying stuff at the so-called "foot".
 *
 * @example Basic usage
 * ```tsx
 * <Footer>
 *   <Container>
 *     <P>(c) [current year] banana farmers LLC. All rights reserved</P>
 *   </Container>
 * </Footer>
 * ```
 *
 * @alpha
 */
export const Footer: PolymorphicComponent<"footer", {}> = ({
  Component = "footer",
  ...props
}) => (
  <Component {...props} className={css("shale-v1-footer", props?.className)} />
);
