import React from "react";
import { useRef, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Typed from "typed.js";
import animationData from "../assets/animated.json";
import LottieAnim from "../utils/useLottieAnim.js";
import { HOME_BOX1, HOME_BOX2, HOME_BOX3, HOME_BOX4 } from "../styles/styles";
const Home = () => {
  const textStyle = {
    fontWeight: "bold",
    fontSize: "2.2rem",
  };
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
      loop: true,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);
  return (
    <Box id="Home" sx={HOME_BOX1}>
      <Box sx={HOME_BOX2}>
        <LottieAnim animationData={animationData} />
      </Box>
      <Box sx={HOME_BOX3}>
        <Box sx={HOME_BOX4}>
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
