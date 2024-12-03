import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <Box width="100%">
      {children}
      <Outlet />
      {/* Render nested routes here */}
      <Navbar />
    </Box>
  );
};

export default MainLayout;
