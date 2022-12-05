import { Button, InputLabel, TextField, Typography } from "@mui/material";

const Security = () => {
  return (
    <>
      <Typography variant="h6" fontSize={16} fontWeight={600} mb={4}>
        Security
      </Typography>

      {/* <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontSize: 14,
          mb: 2,
        }}
      >
        Delete Account
      </InputLabel> */}
      <Button color="error" variant="contained" disableElevation fullWidth>
        Delete Account
      </Button>
    </>
  );
};

export default Security;
