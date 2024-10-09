import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { getMoviesByCategory } from "../api/Api";
import { useNavigate } from "react-router-dom";

export default function CatMovies({ catID }) {
  const [movies, setMovies] = useState([]);

  // Navigate card
  const navigate = useNavigate();
  const handleCardClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };
  // Media queries for different screen sizes
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  // Dynamically set the number of movies to show based on screen size
  let moviesToShow = 6;
  if (isSmallScreen) moviesToShow = 2;
  else if (isMediumScreen) moviesToShow = 4;

  useEffect(() => {
    const fetchMovies = async (catID) => {
      try {
        const data = await getMoviesByCategory(catID);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies(catID);
  }, [catID]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {movies.slice(0, moviesToShow).map((movie) => (
        <Card
          key={movie.title}
          sx={{
            width: 150,
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            mb: 2,
            cursor: "pointer",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.07)",
            },
          }}
          onClick={() => handleCardClick(movie.id)}
        >
          <CardMedia
            component="img"
            height="200"
            image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <CardContent
            sx={{
              padding: "10px",
              backgroundColor: "#2c2c2c",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography variant="body1" sx={{ color: "#ffffff" }}>
              {movie.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
