import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ClientOnlyPortal from "./clientOnlyPortal";
import ShopagoButton from "./Inputs/Button/Button";

export default function AuthDialog({ open, handleClose }) {
  return (
    <>
      {open && (
        <ClientOnlyPortal selector="#modals">
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText> */}
              <TextField
                id="outlined-basic"
                type="email"
                variant="outlined"
                placeholder="Email / Phone number"
                fullWidth
              />
              <ShopagoButton
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 1,
                }}
              >
                <>Next</>
              </ShopagoButton>

              <ShopagoButton
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 1,
                }}
              >
                <>Continue with google</>
              </ShopagoButton>
            </DialogContent>
          </Dialog>
        </ClientOnlyPortal>
      )}
    </>
  );
}
