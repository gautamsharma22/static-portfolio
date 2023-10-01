import React from "react";
import { useRef, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Typed from "typed.js";
import Background from "../backgrounds/zig-zag.svg";
import animationData from "../assets/animated.json";
import LottieAnim from "../utils/useLottieAnim.js";
import useObserver from "../utils/useObserver";
const Home = () => {
  const textStyle = {
    fontWeight: "bold",
    fontSize: "2.2rem",
  };
  const componentRef = useRef(null);
  useObserver(componentRef);
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  useEffect(() => {
    const options = {
      startDelay: 500,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 80,
    };
    const typed1 = new Typed(heading1.current, {
      strings: ["I am Gautam Sharma"],
      ...options,
    });
    const typed2 = new Typed(heading2.current, {
      strings: [
        "Interested in <span style='color: #3da9fc'>Problem Solving. </span>",
        "Interested in <span style='color: red'>Web Development.</span>",
      ],
      ...options,
      loop:true,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);
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
        <LottieAnim animationData={animationData} />
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
            Hello!
          </Typography>
          <div display="inline" style={textStyle}>
            <span ref={heading1} />
            <br />
            <span ref={heading2} />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
