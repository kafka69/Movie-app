import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailByID } from "../api/Api";
import styled from "styled-components";
import { Box, Typography, Chip, Button, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #ffffff;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const InfoBox = styled(Box)`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
`;

const GenreList = styled(Box)`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const IconButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export default function MovieDetail() {
  const { id } = useParams();
  const [movieID, setMovieID] = useState(String(id));
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getDetailByID(movieID);
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [movieID]);

  return (
    <Container>
      {movieDetail && (
        <>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
          <Typography variant="h4" gutterBottom>
            {movieDetail.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {movieDetail.tagline}
          </Typography>
          <InfoBox>
            <Typography variant="body1">
              <strong>Overview:</strong> {movieDetail.overview}
            </Typography>
            <Typography variant="body2" style={{ marginTop: "20px" }}>
              <strong>Release Date:</strong> {movieDetail.release_date}
            </Typography>
            <Typography variant="body2" style={{ marginTop: "20px" }}>
              <strong>Runtime:</strong> {movieDetail.runtime} minutes
            </Typography>
            <Typography variant="body2" style={{ marginTop: "20px" }}>
              <strong>Genres:</strong>
            </Typography>
            <GenreList>
              {movieDetail.genres.map((genre) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  style={{ color: "#ffffff", backgroundColor: "#1a73e8" }}
                />
              ))}
            </GenreList>
            <Typography
              variant="body2"
              style={{ marginTop: "20px", marginBottom: "50px" }}
            >
              <strong>Vote Average:</strong> {movieDetail.vote_average} / 10
            </Typography>

            {/* Icon Buttons */}
            <IconButtonContainer>
              <Button
                variant="contained"
                startIcon={<PlayArrowIcon />}
                style={{ backgroundColor: "#ffffff", color: "#000000" }}
                onClick={() => console.log("Play button clicked")}
              >
                Play
              </Button>
              <Button
                variant="outlined"
                startIcon={<PlayArrowIcon />}
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
                onClick={() => console.log("Trailer button clicked")}
              >
                Trailer
              </Button>
              <IconButton
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
                onClick={() => console.log("Add button clicked")}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
                onClick={() => console.log("Group button clicked")}
              >
                <GroupIcon />
              </IconButton>
            </IconButtonContainer>
          </InfoBox>
        </>
      )}
    </Container>
  );
}
