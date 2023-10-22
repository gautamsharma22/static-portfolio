import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import LANG_Background from "../backgrounds/bullseye-gradient.svg";
import LangCards from "../extras/LangCards";
const LangSkills = () => {
  return (
    <>
      <Box
        minHeight="100vh"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: `url(${LANG_Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          mt: 2,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mt: 3,
          }}
        >
          Languages / Skills
        </Typography>
        <Box
          sx={{
            display: "flex",
            m: 3,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          {LangCards}
        </Box>
      </Box>
    </>
  );
};

export default LangSkills;
