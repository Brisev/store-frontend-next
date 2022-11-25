import { Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ShopagoButton from "../../components/Inputs/Button/Button";

const CartSumarrySideBar = () => {
  return (
    <Box
      sx={{
        height: 250,
        backgroundColor: "white",
      }}
    >
      <Stack
        mb={0}
        px="1rem"
        py="0.5rem"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" sx={{ fontFamily: "Sansation" }}>
          Order Summary
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sansation",
            fontWeight: 700,
            color: "var(--bg-accent)",
          }}
        >
          {4} Items
        </Typography>
      </Stack>
      <Divider />
      <Stack
        mb={2}
        px="1rem"
        pt="1rem"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ fontFamily: "Sansation", color: "var(--text-2)" }}>
          Subtotal
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sansation",
            fontWeight: 700,
          }}
        >
          N{90000}
        </Typography>
      </Stack>
      <Stack
        mb={2}
        px="1rem"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ fontFamily: "Sansation", color: "var(--text-2)" }}>
          Delivery Fee
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sansation",
            fontWeight: 700,
          }}
        >
          ---
        </Typography>
      </Stack>
      <Stack
        mb={2}
        px="1rem"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Sansation",
            color: "var(--text-2)",
          }}
        >
          Total
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sansation",
            fontWeight: 700,
            color: "var(--bg-accent)",
          }}
        >
          N{90000}
        </Typography>
      </Stack>

      <Box px="1rem" pt="0.3rem">
        <ShopagoButton fullWidth size="large" sx={{}}>
          <>CHECKOUT</>
        </ShopagoButton>
      </Box>
    </Box>
  );
};

export default CartSumarrySideBar;
