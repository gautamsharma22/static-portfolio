import React from "react";
import { useRef } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Typed from "react-typed";
import Background from "../backgrounds/zig-zag.svg";
import animationData from "../assets/animated.json";
import LottieAnim from "../utils/useLottieAnim.js"
import useObserver from "../utils/useObserver";
const Home = () => {
  const textStyle = {
    fontWeight: "bold",
    fontSize: "2.5rem",
  };
  const componentRef = useRef(null);
  useObserver(componentRef);
  return (
    <Box
      id="Home"
      ref={componentRef}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "50vh", sm: "100vh" },
          width: { xs: "100vw", sm: "50vw" },
        }}
      >
      <LottieAnim animationData={animationData}/>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "5px solid blue",
          height: { xs: "60vh", sm: "100vh" },
          width: { xs: "100vw", sm: "50vw" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "", sm: "center" },
            flexDirection: "column",
            // border: "5px solid blue",
            height: { xs: "100%", sm: "60%" },
            width: "80%",
          }}
        >
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Hello There!
          </Typography>
          <Typed
            strings={["I am Gautam Sharma"]}
            typeSpeed={50}
            backSpeed={50}
            style={textStyle}
          />
          <Typed
            strings={[
              "I love <span style='color: #3da9fc;'>Problem Solving </span>",
              "I love <span style='color: red;'>Web Development</span>",
            ]}
            typeSpeed={50}
            backSpeed={80}
            loop
            contentType="html"
            style={textStyle}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
