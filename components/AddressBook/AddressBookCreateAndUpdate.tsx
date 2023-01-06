import { Box, Button, Grid, TextField } from '@mui/material';

const AddressBookCreateAndUpdate = () => {
  return (
    <Box
      sx={{
        padding: 0,
      }}
    >
      <Grid
        container
        component='form'
        rowSpacing={{ xs: 2, sm: 2, md: 2 }}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        columns={12}
        padding={0}
        // mx="auto"
      >
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField placeholder='First Name' fullWidth size='small' />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField placeholder='Last Name' fullWidth size='small' />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField placeholder='Phone Number' fullWidth size='small' />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField placeholder='State' fullWidth size='small' />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField placeholder='City' fullWidth size='small' />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            placeholder='Address'
            multiline
            rows={6}
            fullWidth
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            placeholder='Additional Information'
            fullWidth
            multiline
            rows={6}
            size='small'
          />
        </Grid>
      </Grid>
      {/* <Box display="flex" justifyContent="center" mt={4} mb={5}>
        <Button fullWidth variant="contained" disableElevation>
          Add Address
        </Button>
      </Box> */}
    </Box>
  );
};

export default AddressBookCreateAndUpdate;
