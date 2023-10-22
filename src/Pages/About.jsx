import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import {
  ABOUT_BOX1_OUTER,
  ABOUT_BOX2_OUTER,
  ABOUT_BOX1_INNNER1,
  ABOUT_BOX1_INNNER2,
  ABOUT_BOX2_INNER,
  PARA1,
  PARA2,
} from "../styles/styles";
import { useMediaQuery } from "@mui/material";
const About = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const variant = isSmallScreen ? "body1" : "h6";
  return (
    <>
      <Box sx={ABOUT_BOX1_OUTER} id="About">
        <Box sx={ABOUT_BOX1_INNNER1}>
          <Box sx={ABOUT_BOX1_INNNER2}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ mt: 3 }}
              fontWeight="bold"
              textAlign={{ xs: "center", sm: "right" }}
            >
              About Me
            </Typography>
            <Typography variant={variant} sx={{ p: 3 }} textAlign={"justify"}>
              {PARA1}
            </Typography>
            <Typography
              variant={variant}
              gutterBottom
              sx={{ p: 3 }}
              textAlign={"justify"}
            >
              {PARA2}
            </Typography>
          </Box>
        </Box>
        <Box sx={ABOUT_BOX2_INNER}>
          <Box
            component="img"
            border={"2px solid black"}
            sx={ABOUT_BOX2_OUTER}
          />
        </Box>
      </Box>
    </>
  );
};

export default About;
