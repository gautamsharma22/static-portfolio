import { Tech } from "../extras/Data";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
const TechCards = Tech.map((tech) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: { xs: "75%", sm: "25%" },
        m: 1,
      }}
      key={tech.Name}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={tech.Image}
          alt="TechImage"
          style={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {tech.Name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});
export default TechCards;
