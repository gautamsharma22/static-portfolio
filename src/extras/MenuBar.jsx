import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { NavBarActive } from "../App";
import MyDrawer from "./SideDrawer";
import MyScroller from "../utils/useScroller";
export default function MenuBar(props) {
  const navItems = ["Home", "About", "Projects", "Message"];
  const { selectedButton, setselectedButton } = React.useContext(NavBarActive);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1F6YtTo_Qc9GyKwZymmG3fxFrEHOLlvsu/view";
    link.download = "Sample_Resume.pdf";
    link.click();
  };
  const drawer = MyDrawer(handleDrawerToggle,handleDownloadClick);

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <FaceRetouchingNaturalIcon
            sx={{
              mr: 1,
              color: "#eb3b3b",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Typography
            variant="h6"
            component="div"
            fontWeight={"bold"}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            My Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: selectedButton === item ? "#eb3b3b" : "#ffffff",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setselectedButton(item);
                  MyScroller(item);
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              sx={{
                color: "#ffffff",
                fontWeight: "bold",
                ":hover": {
                  color: "#eb3b3b",
                },
              }}
              onClick={handleDownloadClick}
            >
              Hire Me!
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
