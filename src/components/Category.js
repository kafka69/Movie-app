import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Box,
  Typography,
  Link,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { getMovieCategories } from "../api/Api";
import CatMovies from "./CatMovies";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)`
  padding: 20px;
  color: #ffffff;
`;

const CategoryHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CategoryUnderline = styled(Box)`
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 20px;
`;

const MovieGrid = styled(Box)`
  display: flex;
  gap: 20px;
`;

export default function Category() {
  // Navigate the pages
  const navigate = useNavigate();

  const handleSeeMoreClick = (id,name) => {
    navigate(`/category?id=${id}&name=${name}`);
  };


  // State to store selected category
  const [selectedCategory, setSelectedCategory] = useState("0");

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // console.log("Selected category:", event.target.value);
  };

  const [movieCategories, setMovieCategories] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getMovieCategories();
        setMovieCategories(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
  return (
    <Container sx={{ marginTop: "50px" }}>
      <h2 style={{ textAlign: "center" }}>MOVIE CATEGORIES</h2>
      {/* Dropdown for selecting categories */}
      <Box sx={{ maxWidth: 220, marginBottom: "20px" }}>
        <FormControl fullWidth>
          <InputLabel
            id="category-select-label"
            sx={{ color: "white" }}
          >
            Choose a Category
          </InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            label="Choose a Category"
            onChange={handleCategoryChange}
            sx={{
              "& .MuiSelect-select": {
                color: "white",
              },
            }}
          >
            {movieCategories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
            <MenuItem value={"0"}>All</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Conditional rendering of movies based on selected category */}
      {selectedCategory === "0"
        ? movieCategories.map((category) => (
            <Box key={category.id} sx={{ marginTop: "50px" }}>
              <CategoryHeader>
                <Typography variant="h5">{category.name}</Typography>
                <Button onClick={()=>handleSeeMoreClick(category.id,category.name)} color="inherit" underline="hover">
                  See more
                </Button>
              </CategoryHeader>
              <CategoryUnderline />
              <MovieGrid>
                <CatMovies catID={category.id} />
              </MovieGrid>
            </Box>
          ))
        : // Display only the selected category
          movieCategories
            .filter((category) => category.id === selectedCategory)
            .map((category) => (
              <Box key={category.id} sx={{ marginTop: "50px" }}>
                <CategoryHeader>
                  <Typography variant="h5">{category.name}</Typography>
                  <Link onClick={()=>handleSeeMoreClick(category.id,category.name)} href="#" color="inherit" underline="hover">
                    See more
                  </Link>
                </CategoryHeader>
                <CategoryUnderline />
                <MovieGrid>
                  <CatMovies catID={category.id} />
                </MovieGrid>
              </Box>
            ))}
    </Container>
  );
}
