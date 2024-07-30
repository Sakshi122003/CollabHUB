import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#5AB2FF",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          align="center"
          sx={{ fontWeight: "bold", color: "white", fontFamily: "Roboto" }}
        >
          Contact: info@CollabHUB.com
          <br />
          Phone: (555) 123-4567
          <br />
          Address: 123 Tech Lane, Innovation City, IN 54321
        </Typography>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <IconButton aria-label="Facebook" sx={{ color: "black" }}>
            <Facebook />
          </IconButton>

          <IconButton aria-label="Instagram" sx={{ color: "black" }}>
            <Instagram />
          </IconButton>
          <IconButton aria-label="LinkedIn" sx={{ color: "black" }}>
            <LinkedIn />
          </IconButton>
          <IconButton aria-label="Twitter" sx={{ color: "black" }}>
            <Twitter />
          </IconButton>
        </Box>
        <Typography
          variant="body1"
          align="center"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "white",
            fontFamily: "Roboto",
          }}
        >
          {"Copyright © "}
          <Link
            href="https://CollabHUB.com/"
            sx={{ color: "white", textDecoration: "underline" }}
          >
            CollabHUB
          </Link>{" "}
          {new Date().getFullYear()}
          {". All rights reserved."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
