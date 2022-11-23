import * as React from "react";
import Box from "@mui/material/Box";

export default function ShopagoBox({ children }: any) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      {children}
    </Box>
  );
}
