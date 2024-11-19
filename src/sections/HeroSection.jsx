import { Box, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      bgcolor="black"
      sx={{
        backgroundImage: `url('/wavesandcruves/waveheroSection.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Typography color="white">Hello</Typography>
    </Box>
  );
};

export default HeroSection;
