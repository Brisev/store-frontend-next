import { CheckCircle, Delete, EditLocationAlt } from "@mui/icons-material";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { memo } from "react";

const AddressBookItem = ({ onDeleteAddress }) => {
  return (
    <Card
      sx={{
        my: 1,
      }}
      elevation={0}
    >
      <CardContent>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <Typography fontSize={14}>Bright, Ikhide</Typography>
            <Typography fontSize={14} mt={1}>
              Ikeja, Lagos
            </Typography>
            <Typography fontSize={14} mt={1}>
              No 2, behind Gishiri police station
            </Typography>
          </Box>
          <Box>
            <IconButton size="small" color="warning">
              <EditLocationAlt fontSize="small" />
            </IconButton>
            <IconButton size="small" color="error" onClick={onDeleteAddress}>
              <Delete fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
        <Box mt={3} display="flex" flexDirection="row">
          <CheckCircle
            color="success"
            fontSize="small"
            sx={{
              mr: 1,
              fontSize: "15px",
            }}
          />
          <Typography
            variant="caption"
            sx={{
              mt: -0.2,
            }}
          >
            Primary Shipping Address
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default memo(AddressBookItem);
