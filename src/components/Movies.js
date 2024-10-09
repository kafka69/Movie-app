import React, { useState, useEffect } from "react";
import { Container, Pagination, Box } from "@mui/material";
import MovieCard from "../cards/MovieCard";
import { getMovies } from "../api/Api";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    // Fetch data
    const fetchMovies = async () => {
        try {
            const data = await getMovies(page)
            setMovies(data)
        }catch (error) {
            console.log(error);
        }
      setTotalPages(100); 
    };
    fetchMovies();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <h1>List all movies</h1>
      {/* Loop through movies and render MovieCard */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

      {/* Pagination Component */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          boundaryCount={2} 
          siblingCount={1} 
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
            },
          }}
        />
      </Box>
    </Container>
  );
}
