import React from "react";
import ImgSlider from "../components/ImgSlider";
import { Container, useMediaQuery, Box } from "@mui/material";
import Viewers from "../components/Viewers";
import Footer from "../components/Footer";
import Category from "../components/Category";

export default function HomePage() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Media query for small screens

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <h2>TRENDING MOVIES</h2>
        {!isSmallScreen && <ImgSlider />}
      </Container>
      <Container
        sx={{
          marginTop:"100px",
          marginBottom:"100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>ALL MOVIES</h2>
        <Viewers />
        <Category/>
      </Container>
      <Footer />
    </div>
  );
}
