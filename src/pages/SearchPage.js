import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { searchMovies } from "../api/Api";
import CatCards from "../cards/CatCards";
const SearchContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
  color: "white",
});

const MovieCard = styled(Card)({
  backgroundColor: "#2c2c2c",
  color: "white",
  maxWidth: 200,
  margin: "10px",
});

const MovieImage = styled(CardMedia)({
  height: 300,
});

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const fetchMovies = async (searchTerm) => {
      try {
        const data = await searchMovies(searchTerm);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <SearchContainer>
      <TextField
        variant="outlined"
        label="Search for movies"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          input: { color: "white" },
          label: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          width: "500px",
        }}
      />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        {movies.length > 0 ? (
          <CatCards purpose={"Results"} movies={movies} />
        ) : (
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            No results found
          </Typography>
        )}
      </Grid>
    </SearchContainer>
  );
}
