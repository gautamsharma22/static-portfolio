import React, { useRef } from "react";
import { Box } from "@mui/system";
import ContactForm from "../extras/Form";
import Background from "../backgrounds/scattered-forcefields.svg";
import animationData from "../assets/contact.json";
import LottieAnim from "../utils/useLottieAnim"
import useObserver from "../utils/useObserver";
const Message = () => {
  const componentRef = useRef(null);
  useObserver(componentRef);
  return (
    <>
      <Box
        ref={componentRef}
        id="Message"
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
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "5px solid red",
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
            height: "100vh",
            width: { xs: "100vw", sm: "50vw" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // border: "5px solid blue",
              height: "60%",
              width: "80%",
            }}
          >
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Message;
