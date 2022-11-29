import * as React from "react";
import TextField from "@mui/material/TextField";
import ShopagoButton from "./Inputs/Button/Button";
import Modal from "./Misc/Modal";

export default function AuthDialog({ open, handleClose }) {
  return (
    <Modal open={open} onHandleCloseModal={handleClose}>
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
    </Modal>
  );
}
