import React, { useRef } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Background from "../backgrounds/sun-tornado.svg";
import DevImage from "../assets/profile.jpg";
import { useMediaQuery } from "@mui/material";
import useObserver from "../utils/useObserver";
const About = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const variant = isSmallScreen ? "body1" : "h6";
  const componentRef = useRef(null);
  useObserver(componentRef);
  return (
    <>
      <Box
        ref={componentRef}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          background: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          mt: 2,
        }}
        id="About"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "5px solid red",
            minHeight: "100vh",
            width: { xs: "100vw", sm: "70vw" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              // border: "5px solid blue",
              height: "60%",
            }}
          >
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
              I am Gautam Sharma, currently in my first year of master's
              studies. My passion lies in web development and problem-solving,
              and I am dedicated to honing my skills in these areas. I have
              invested time and effort in learning the MERN (MongoDB,
              Express.js, React.js, Node.js) stack and React Native, and I have
              attained an intermediate level of proficiency in these
              technologies. Alongside my web development skills, I have also
              acquired intermediate knowledge in Data Structures and Algorithms
              (DSA). These skills have enabled me to approach problem-solving in
              a systematic manner.
            </Typography>
            <Typography
              variant={variant}
              gutterBottom
              sx={{ p: 3 }}
              textAlign={"justify"}
            >
              As I progress through my master's program, I am actively seeking
              internship opportunities to apply and further develop my skills. I
              am eager to gain real-world experience and contribute to web
              development projects. Through internships, I aim to broaden my
              understanding of industry practices, enhance my technical
              abilities, and collaborate with professionals in the field. I am
              excited about the opportunity to learn from experienced mentors
              and work on challenging projects that will allow me to grow both
              professionally and personally.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "5px solid black",
          }}
        >
          <Box
            component="img"
            border={"2px solid black"}
            sx={{
              width: { xs: "100vw", sm: "30vw" },
              height: { xs: "100vw", sm: "30vw" },
              backgroundImage: `url(${DevImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
              m: 1,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default About;
