import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const navItems = [
  "Title",
  "Description",
  "Languages",
  "Features",
  "Visual",
  "Benefits/Aspects",
  "Milestones",
  "FAQ",
];

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#5AB2FF",
        boxShadow: "#4C3BCF",
        padding: "10px 0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Website Name */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
          }}
        >
          <span style={{ color: "black" }}>Collab</span>
          <span style={{ color: "#4C3BCF" }}>HUB</span>
        </Typography>

        {/* Centered Navigation Items */}
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#f0f0f0",
            borderRadius: "9999px",
            padding: "8px 8px",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: "#4C3BCF",
                textTransform: "none",
                fontWeight: "normal",
                fontSize: "16px",
                margin: "0 8px",
                fontFamily: "Roboto, sans-serif",
              }}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
