import * as React from "react";
import Box from "@mui/material/Box";

export default function ShopagoBox({ children, sx }: any) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem",
        marginTop: "1rem",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
