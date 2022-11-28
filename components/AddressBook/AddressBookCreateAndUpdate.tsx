// import { TextInput } from "../Inputs/TextInput";

import { Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";
// import { ShopagoSelect, StyledOption } from "../Inputs/Select";
// import TextInput from "../Inputs/TextInput";

const AddressBookCreateAndUpdate = () => {
  return (
    <>
      <Grid
        container
        component="form"
        rowSpacing={{ xs: 2, sm: 2, md: 2 }}
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        columns={{ xs: 12, sm: 6, md: 8, lg: 12 }}
        mx="auto"
        // mt={6}
      >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField placeholder="First Name" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField placeholder="Last Name" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField placeholder="Address" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField placeholder="Address" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField
            placeholder="Additional Information"
            fullWidth
            size="small"
          />
        </Grid>
        {/* <ShopagoSelect>
          <StyledOption value={10}>Documentation</StyledOption>
        </ShopagoSelect> */}
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField placeholder="State" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField placeholder="City" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField placeholder="Phone Number" fullWidth size="small" />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressBookCreateAndUpdate;
