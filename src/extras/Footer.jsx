import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"2rem"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#222222",
        }}
      >
        {" "}
        <Typography variant="body1" textAlign="center" backgroundColor= "#222222">
          Don't forget to give feedback ❤️  ||   Developed By- MEEE 🫠
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
