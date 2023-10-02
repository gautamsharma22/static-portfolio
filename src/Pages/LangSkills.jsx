import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { CurrTech } from "../extras/Data";
import Background from "../backgrounds/bullseye-gradient.svg";
import useObserver from "../utils/useObserver";
const LangSkills = () => {
  const componentRef = useRef(null);
  useObserver(componentRef);
  const newArr = CurrTech.map((tech) => {
    return (
        <Card
          sx={{
            width: { xs: "100%", sm: "25%" },
            m: 1,
        }}
        key={tech.Name}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src={tech.Image}
              alt="TechImage"
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
                {tech.Name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {tech.Info}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    );
  });
  return (
    <>
      <Box
        ref={componentRef}
        minHeight="100vh"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: `url(${Background})`,
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
          }}
        >
          {newArr}
        </Box>
      </Box>
    </>
  );
};

export default LangSkills;
