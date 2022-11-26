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

interface IModal extends DialogProps {
  open: boolean;
  okText?: string;
  cancelText?: string;
  header?: string;
  children?: React.ReactElement | React.ReactElement[];
}

export default function Modal({
  open,
  onClose,
  okText,
  cancelText,
  header,
  children,
  ...rest
}: IModal) {
  return (
    <>
      {open && (
        <ClientOnlyPortal selector="#modals">
          <Dialog {...rest} open={open} onClose={onClose}>
            <DialogTitle
              sx={{
                fontWeight: 600,
                fontSize: 17,
              }}
            >
              {header}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            {/* {cancelText ||
              (okText && ( */}
            <DialogActions
              sx={{
                mb: 1,
              }}
            >
              <Button variant="text" color="error" disableElevation>
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
