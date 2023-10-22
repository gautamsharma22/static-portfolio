import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CurrTech } from "../extras/Data";
const LangCards = CurrTech.map((tech) => {
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
              color: "text.primary",
            }}
          >
            {tech.Name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});
export default LangCards;
