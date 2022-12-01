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
import styled from "@emotion/styled";

interface IModal extends DialogProps {
  open: boolean;
  showModalActions?: boolean;
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

const BlurryDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  backdropFilter: "blur(2px)",
}));

export default function Modal({
  open,
  okText,
  cancelText,
  header,
  children,
  onHandleCloseModal = true,
  showModalActions,
  ...rest
}: IModal) {
  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    onHandleCloseModal();
  };

  return (
    <>
      {open && (
        <ClientOnlyPortal selector="#modals">
          <BlurryDialog
            {...rest}
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            TransitionComponent={Transition}
          >
            <DialogTitle
              sx={{
                fontWeight: 600,
                padding: {
                  xs: 2,
                  md: 3,
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
                  md: 3,
                },
              }}
            >
              {children}
            </DialogContent>
            {/* {cancelText ||
              (okText && ( */}
            {showModalActions && (
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
            )}
            {/* ))} */}
          </BlurryDialog>
        </ClientOnlyPortal>
      )}
    </>
  );
}
