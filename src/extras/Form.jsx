import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LottieAnim from "../utils/useLottieAnim.js";
import animationData from "../assets/MessageSent.json";
import { Typography } from "@mui/material";
import { useForm } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xleyekdz");
  if (state.succeeded) {
    return (
      <>
        <Typography variant="h4" fontWeight="bold">
          Message Sent{" "}
        </Typography>
        <LottieAnim animationData={animationData} />
      </>
    );
  }

  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        Drop a Message
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="name"
          label="Name"
          type="text"
          id="name"
          autoComplete="name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
          autoComplete="message"
          multiline
          minRows={3}
          maxRows={3}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="error"
          sx={{ mt: 3, mb: 2 }}
          disabled={state.submitting}
        >
          Submit
        </Button>
        <Typography variant="body1" gutterBottom>
          * One Click Submit ! No Login/SignUp Required
        </Typography>
      </Box>
    </>
  );
}
