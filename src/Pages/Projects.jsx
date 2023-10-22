import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import {
  PROJECT_CONTAINER,
  PROJECT_CHILD1,
  PROJECT_CHILD2,
} from "../styles/styles";
import ProjectCards from "../extras/ProjectCards";
export default function Projects() {
  return (
    <>
      <Box id="Projects" sx={PROJECT_CONTAINER}>
        <Box sx={PROJECT_CHILD1}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              mt: 3,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Mini Projects
          </Typography>
          <Box sx={PROJECT_CHILD2}>{ProjectCards}</Box>
        </Box>
      </Box>
    </>
  );
}
