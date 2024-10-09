import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Typography, Link, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useLocation } from "react-router-dom";
import { getMoviesByCategory } from "../api/Api";
import CatCards from "../cards/CatCards";

// Mock data
const categoryData = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan libero vitae velit feugiat pellentesque. Fusce eu urna sed nunc facilisis fermentum sit amet vel leo. Maecenas arcu orci, ullamcorper ac vulputate sit amet, feugiat vitae lorem. Nunc egestas porttitor urna ac posuere. Orci varius natoque penatibus et magnis dis.",
};

const Container = styled(Box)`
  display: flex;
  padding: 20px;
  color: #fff; // Text color white for contrast
`;

const LeftSection = styled(Box)`
  width: 45%;
  margin-left: 50px;
`;

const RightSection = styled(Box)`
  width: 45%;
  text-align: left;
`;

const MovieImage = styled.img`
  width: 90%;
  height: auto;
  border-radius: 10px;
`;

const MovieCategoryHeader = styled(Typography)`
  font-size: 32px;
  font-weight: bold;
  color: #ffcc00;
`;

const CategoryDescription = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #cccccc;
`;

const TotalResults = styled(Box)`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  & > div {
    background-color: #333;
    border-radius: 20px;
    padding: 8px 15px;
    font-size: 14px;
    color: #fff;
  }
`;

const BackLink = styled(Link)`
  color: #999999;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 10px;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

export default function CategoryPage() {
  // Get the current id - name
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");

  const [movies, setMovies] = useState([])
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(0)
  const [bgImg, setbgImg] = useState()
  useEffect(()=>{
    const fetchMovies = async (catID) => {
      try {
        const data = await getMoviesByCategory(catID);
        console.log("results",data)
        setTotal(data.total_results)
        setMovies(data.results);
        setPages(data.total_pages);
        setbgImg(data.results[0].backdrop_path)
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies(id);
  },[])
  return (
    <div>
    <Container>
      
      {/* Left Section with Image */}
      <LeftSection>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${bgImg}`}
          alt={categoryData.name}
        />
      </LeftSection>

      {/* Right Section with Details */}
      <RightSection>
        <BackLink href="/home">&#60; All interests</BackLink>
        <MovieCategoryHeader
          variant="h4"
          style={{ marginBottom: "10px", marginTop: "10px" }}
        >
          {name}
        </MovieCategoryHeader>
        <CategoryDescription>{categoryData.description}</CategoryDescription>

        {/* Total Results */}
        <TotalResults>
          <div>Movies • {total}</div>
        </TotalResults>

        {/* Share Icon */}
        <IconButton sx={{ color: "#fff", marginTop: "10px" }}>
          <ShareIcon />
        </IconButton>
      </RightSection>
      
      
    </Container>

    <CatCards purpose={"Popular Movies"} movies={movies}/>
    </div>
  );
}
