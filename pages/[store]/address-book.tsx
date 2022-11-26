import { Grid, Typography } from "@mui/material";
import { Fragment, ReactElement } from "react";
// import { Grid } from "swiper";
import AddressBookItem from "../../components/AddressBookItem";
import StoreLayout from "../../layouts/store";

const AddressBook = () => {
  return (
    <Fragment>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          pt: "0.5rem",
          pb: "1rem",
        }}
      >
        Address book
      </Typography>

      <Grid
        container
        rowSpacing={{ xs: 0, sm: 6, md: 8 }}
        columnSpacing={{ xs: 0, sm: 2, md: 1 }}
        columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}
        mx="auto"
      >
        {[1, 2, 3].map((address, index) => {
          return (
            <Grid item xs={12} sm={3} md={3} lg={4} key={index}>
              <AddressBookItem />
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

AddressBook.getLayout = (page: ReactElement) => (
  <StoreLayout>{page}</StoreLayout>
);

export default AddressBook;
