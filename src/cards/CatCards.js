import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, IconButton, Container } from '@mui/material';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MovieCarousel = ({ movies,purpose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const NextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        color: '#fff',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );

  const PrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        color: '#fff',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setCurrentIndex(current),
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 , mb:10 }}>
      <Typography variant="h4" color="white" sx={{ mb: 2 }}>
        {purpose}
      </Typography>
      <Box sx={{ width: '100%', position: 'relative' }}>
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <Box key={index} sx={{ padding: '0 8px' }}>
              <Card
                sx={{
                  backgroundColor: '#1c1c1c',
                  color: 'white',
                //   width: 220, 
                  height: 460, 
                }}
              >
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  sx={{ height: 300, width: '100%' }}
                />
                <CardContent>
                <Typography
                    variant="body1"
                    component="div"
                    gutterBottom
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%', 
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {movie.release_date}
                  </Typography>
                  <Typography variant="body2" color="yellow">
                    ⭐ {movie.vote_average}
                  </Typography>
                  <Button variant="contained" sx={{ mt: 1, width: '100%' }}>
                    add to watch list
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default MovieCarousel;
