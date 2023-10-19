import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Tech } from "../extras/Data";
import Background from "../backgrounds/wavey-fingerprint.svg";

const TechStack = () => {
  const newArr = Tech.map((tech) => {
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
              }}
            >
              {tech.Name}
            </Typography>
            <Typography variant="body1">{tech.Info}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
  return (
    <>
      <Box
        minHeight="80vh"
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
          Current Tech Stack
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

export default TechStack;
