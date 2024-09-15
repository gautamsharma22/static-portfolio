import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import LCLogo from "../assets/leetcode.png";
const Icons = () => {
  const navIcons = [
      <img src={LCLogo} className=" leetcode-logo" />,
      <LinkedInIcon fontSize="large" />,
      <GitHubIcon fontSize="large" />,
      <EmailIcon fontSize="large" />,
  ];
  const navLinks = [
    "https://www.leetcode.com/u/LC_Binod",
    "https://www.linkedin.com/in/gautamsharma22",
    "https://www.github.com/gautamsharma22",
    "mailto:gautamsharma.best@gmail.com",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {navIcons.map((item, index) => (
        <a href={navLinks[index]} className="nav-icons" target="_blank">
          {item}
        </a>
      ))}
    </Box>
  );
};

export default Icons;
