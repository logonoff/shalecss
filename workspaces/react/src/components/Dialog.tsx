import type { FC } from "react";
import { css } from "../utils/css";

/** @alpha */
export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {}

/**
 * The Dialog component is a modal dialog box that overlays the current page. It
 * is based on the native HTML `<dialog>` element and cannot be moved or
 * resized.
 *
 * @example Basic usage with actions
 *
 * ```tsx
 * <>
 *   <Button
 *     type="button"
 *     command="show-modal"
 *     commandfor="my-dialog"
 *     aria-haspopup="dialog"
 *   >
 *     Open Dialog
 *   </Button>
 *
 *   <Dialog id="my-dialog" style={{ minWidth: "400px" }}>
 *     <Header compact>
 *       <HeaderTitle>
 *         <HeaderText>This is a dialog</HeaderText>
 *       </HeaderTitle>
 *       <CaptionMenu>
 *         <CaptionButton
 *           title="Close"
 *           type="button"
 *           commandfor="my-dialog"
 *           command="close"
 *         >
 *           ×
 *         </CaptionButton>
 *       </CaptionMenu>
 *     </Header>
 *     <FlexContainer variant="center">
 *       <P>Here, have some actions to choose from.</P>
 *     </FlexContainer>
 *     <CommandBar variant="space-between" gutter>
 *       <Button className="shale-v1-flex-grow">Nothing</Button>
 *       <Button className="shale-v1-flex-grow">Nothing</Button>
 *       <Button
 *         className="shale-v1-flex-grow"
 *         commandfor="my-dialog"
 *         command="close"
 *       >
 *         Close
 *       </Button>
 *     </CommandBar>
 *   </Dialog>
 * </>;
 * ```
 *
 * @alpha
 */
export const Dialog: FC<DialogProps> = (props) => {
  return (
    <dialog {...props} className={css("shale-v1-dialog", props.className)}>
      {props.children}
    </dialog>
  );
};
