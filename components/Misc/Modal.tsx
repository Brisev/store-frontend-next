import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ClientOnlyPortal from "../clientOnlyPortal";
import ShopagoButton from "../Inputs/Button/Button";
import { TransitionProps } from "@mui/material/transitions";
import { Slide } from "@mui/material";

interface IModal extends DialogProps {
  open: boolean;
  okText?: string;
  cancelText?: string;
  header?: string;
  children?: React.ReactElement | React.ReactElement[];
  onHandleCloseModal: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({
  open,
  okText,
  cancelText,
  header,
  children,
  onHandleCloseModal,
  ...rest
}: IModal) {
  return (
    <>
      {open && (
        <ClientOnlyPortal selector="#modals">
          <Dialog
            {...rest}
            open={open}
            onClose={onHandleCloseModal}
            maxWidth="sm"
            TransitionComponent={Transition}
            // fullScreen={true}
          >
            <DialogTitle
              sx={{
                fontWeight: 600,
                padding: {
                  xs: 2,
                },
                fontSize: 17,
              }}
            >
              {header}
            </DialogTitle>
            <DialogContent
              sx={{
                padding: {
                  xs: 2,
                },
              }}
            >
              {children}
            </DialogContent>
            {/* {cancelText ||
              (okText && ( */}
            <DialogActions
              sx={{
                mb: 1,
              }}
            >
              <Button
                variant="text"
                color="error"
                disableElevation
                onClick={onHandleCloseModal}
              >
                {cancelText}
              </Button>
              <Button variant="text" color="primary" disableElevation>
                {okText}
              </Button>
            </DialogActions>
            {/* ))} */}
          </Dialog>
        </ClientOnlyPortal>
      )}
    </>
  );
}
