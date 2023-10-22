import React from "react";
import { Box } from "@mui/system";
import ContactForm from "../extras/Form";
import animationData from "../assets/contact.json";
import LottieAnim from "../utils/useLottieAnim";
import {
  MESSAGE_BOX1,
  MESSAGE_BOX2,
  MESSAGE_BOX3,
  MESSAGE_BOX4,
} from "../styles/styles";
const Message = () => {
  return (
    <>
      <Box id="Message" sx={MESSAGE_BOX1}>
        <Box sx={MESSAGE_BOX2}>
          <LottieAnim animationData={animationData} />
        </Box>
        <Box sx={MESSAGE_BOX3}>
          <Box sx={MESSAGE_BOX4}>
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Message;
