import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const handleInfoClick = (id)=>{
        navigate(`/detail/${id}`)
    }
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        backgroundColor: '#0D1B2A',  
        color: '#FFF',              
        marginBottom: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, height: 160 }}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {movie.original_language}. {movie.title}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {movie.release_date} • {"video: "+movie.video} • {"popularity: "+movie.popularity}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <StarIcon sx={{ color: '#F5C518' }} />
            <Typography variant="body2" sx={{ marginLeft: '4px', opacity: 0.9 }}>
              {movie.vote_average} ({movie.vote_count})
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ padding: '8px', display: 'flex', justifyContent: 'flex-end' }}>
          <InfoIcon sx={{ color: '#1CA1F1', cursor: 'pointer' }} 
          onClick={()=>handleInfoClick(movie.id)}/>
        </Box>
      </Box>
    </Card>
  );
};

export default MovieCard;
