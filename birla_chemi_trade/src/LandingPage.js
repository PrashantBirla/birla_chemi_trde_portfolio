import React from "react";
// import Box from "@material-ui/core/Box";
import backgroundImagePic from "./assets/viktor-kiryanov-lAcYPEiau0U-unsplash.jpg";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function LandingPage() {
  const theme = useTheme();
  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundImagePic})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // position: "absolute",
        width: "100%",
        height: "100vh", // Set a specific height or adjust as needed
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        height={"100vh"}
      >
        <Typography
          sx={{
            fontSize: "70px !important",
            fontWeight: "600",
            color: "#E2A569",
          }}
        >
          Welcome To
        </Typography>
        <Typography
          sx={{
            fontSize: "70px",
            fontWeight: "600",
            color: "#E2A569",
          }}
        >
          Birla Chemi Trade
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#E2A569",
          }}
        >
          your one-stop solution for high-quality textile chemicals.
        </Typography>
      </Box>
    </Box>
  );
}
