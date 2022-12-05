import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const ProfileUpdate = () => {
  return (
    <>
      <Typography variant="h6" fontSize={16} fontWeight={600} mb={4}>
        Update Profile
      </Typography>

      <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontSize: 14,
        }}
      >
        First Name
      </InputLabel>
      <TextField placeholder="" fullWidth sx={{ mb: 3 }} size="small" />
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontSize: 14,
        }}
      >
        Gender
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        fullWidth
        size="small"
        sx={{ mb: 3 }}
        id="demo-simple-select"
        // value={age}
        // label="Age"
        // onChange={handleChange}
      >
        <MenuItem value={10}>Male</MenuItem>
        <MenuItem value={20}>Female</MenuItem>
      </Select>
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontSize: 14,
        }}
      >
        Last Name
      </InputLabel>
      <TextField fullWidth sx={{ mb: 3 }} size="small" />
      <InputLabel
        id="email"
        sx={{
          fontSize: 14,
        }}
      >
        Email
      </InputLabel>
      <TextField
        type="email"
        sx={{ mb: 3 }}
        id="email"
        fullWidth
        size="small"
      />
      <InputLabel
        id="email"
        sx={{
          fontSize: 14,
        }}
      >
        Phone Number
      </InputLabel>
      <TextField type="tel" id="email" fullWidth size="small" />
    </>
  );
};

export default ProfileUpdate;
