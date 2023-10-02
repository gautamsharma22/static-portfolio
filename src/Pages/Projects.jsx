import React, { useRef } from "react";
import { Box } from "@mui/system";
import Background from "../backgrounds/zig-zag.svg";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProjectData } from "../extras/Data";
import useObserver from "../utils/useObserver";
export default function Projects() {
  const componentRef = useRef(null);
  useObserver(componentRef);

  const projects = ProjectData.map((project) => {
    const openLinkInNewTab = () => {
      window.open(project.link, "_blank");
    };
    return (
      <Card sx={{ width: { xs: "100%", sm: "25%" }, m: 1 }} key={project.title}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: project.color }} aria-label="project">
              {project.title[0]}
            </Avatar>
          }
          title={project.title}
          subheader={project.date}
        />
        <CardMedia
          component="img"
          height="194"
          image={project.Image}
          alt={project.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {project.info}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Love it">
            <FavoriteIcon color={"error"} />
          </IconButton>
          <IconButton aria-label="GitHub Link" onClick={openLinkInNewTab}>
            <InsertLinkIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  });
  return (
    <>
      <Box
        ref={componentRef}
        id="Projects"
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
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              m: 3,
            }}
          >
            {projects}
          </Box>
        </Box>
      </Box>
    </>
  );
}
