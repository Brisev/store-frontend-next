import { InputLabel, TextField, Typography } from "@mui/material";

const ChangePassword = () => {
  return (
    <>
      <Typography variant="h6" fontSize={16} fontWeight={600} mb={4}>
        Change Password
      </Typography>

      <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontSize: 14,
        }}
      >
        Current Password
      </InputLabel>
      <TextField type="password" fullWidth sx={{ mb: 3 }} size="small" />

      <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontSize: 14,
        }}
      >
        New Password
      </InputLabel>
      <TextField type="password" fullWidth sx={{ mb: 3 }} size="small" />

      <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontSize: 14,
        }}
      >
        Confirm New Password
      </InputLabel>
      <TextField type="password" fullWidth size="small" />
    </>
  );
};

export default ChangePassword;
