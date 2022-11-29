import { Grid, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ShopagoBox from "../Layout/ShopagoBox";
import HtmlDisplay from "../../utils/htmlDisplay";

const ProductDetailsAndSpecification = (props: any) => {
  return (
    <ShopagoBox>
      <Typography variant="h6" fontSize={16} fontWeight={600} mb={3} mt={1}>
        Product details
      </Typography>
      <>{HtmlDisplay(props.specification)}</>
    </ShopagoBox>
  );
};

export default ProductDetailsAndSpecification;
