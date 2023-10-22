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
const ProjectCards = ProjectData.map((project) => {
  const openLinkInNewTab = () => {
    window.open(project.link, "_blank");
  };
  return (
    <Card
      sx={{ width: { xs: "75%", sm: "25%" }, m: 1 }}
      key={project.title}
      variant="outlined"
    >
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
        <Typography variant="body2" color="text.secondary" align="justify">
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
export default ProjectCards;
