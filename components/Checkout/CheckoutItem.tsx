import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

function CheckoutItem({ itemsCount, count, name }) {
  return (
    <Box paddingBottom={1}>
      <Typography fontSize={13} fontWeight={400} color="grey">
        Package {++count} of {itemsCount}
      </Typography>
      <Typography variant="h6" fontSize={14} fontWeight={400} noWrap>
        {name}
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={1}
      >
        <Box>
          <Typography fontSize={14} fontWeight={400}>
            Ram: 32GB
          </Typography>
          <Typography fontSize={14} fontWeight={400}>
            Color: Green
          </Typography>
        </Box>
        <Typography fontSize={14} fontWeight={400} color="grey">
          2x
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}

export default CheckoutItem;
