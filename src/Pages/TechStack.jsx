import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import TechCards from "../extras/TechCards";
import { TECH_STYLE1, TECH_STYLE2, TECH_STYLE3 } from "../styles/styles";
const TechStack = () => {
  return (
    <>
      <Box minHeight="50vh" sx={TECH_STYLE1}>
        <Typography variant="h3" gutterBottom sx={TECH_STYLE2}>
          Current Tech Stack
        </Typography>
        <Box sx={TECH_STYLE3}>{TechCards}</Box>
      </Box>
    </>
  );
};

export default TechStack;
