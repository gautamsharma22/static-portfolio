import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Tech } from "../extras/Data";
import { Zoom } from "@mui/material";
import Background from "../backgrounds/wavey-fingerprint.svg";
import useObserver from "../utils/useObserver";

const TechStack = () => {
  const componentRef = useRef(null);

  const isVisible = useObserver(componentRef);
  const newArr = Tech.map((tech) => {
    return (
      <Zoom
        key={tech.Name}
        in={isVisible}
        style={{ transformOrigin: "0 0 0" }}
        {...(isVisible ? { timeout: 1000 } : {})}
      >
        <Card
          sx={{
            width: { xs: "100%", sm: "25%" },
            m: 1,
          }}
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
      </Zoom>
    );
  });
  return (
    <>
      <Box
        ref={componentRef}
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
        <Zoom
          in={isVisible}
          style={{ transformOrigin: "0 0 0" }}
          {...(isVisible ? { timeout: 800 } : {})}
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
        </Zoom>
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
