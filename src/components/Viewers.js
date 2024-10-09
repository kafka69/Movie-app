import React from 'react';
import { Box, Grid } from '@mui/material';

const Viewers = () => {
  return (
    <Box sx={{ marginTop: '30px', padding: '30px 0px 26px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <ViewerWrap>
            <img src="/images/viewers-disney.png" alt="" />
            <video autoPlay loop playsInline>
              <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
            </video>
          </ViewerWrap>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <ViewerWrap>
            <img src="/images/viewers-pixar.png" alt="" />
            <video autoPlay loop playsInline>
              <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
            </video>
          </ViewerWrap>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <ViewerWrap>
            <img src="/images/viewers-marvel.png" alt="" />
            <video autoPlay loop playsInline>
              <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
            </video>
          </ViewerWrap>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <ViewerWrap>
            <img src="/images/viewers-starwars.png" alt="" />
            <video autoPlay loop playsInline>
              <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
            </video>
          </ViewerWrap>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <ViewerWrap>
            <img src="/images/viewers-national.png" alt="" />
            <video autoPlay loop playsInline>
              <source
                src="/videos/1564676296-national-geographic.mp4"
                type="video/mp4"
              />
            </video>
          </ViewerWrap>
        </Grid>
      </Grid>
    </Box>
  );
};

// MUI styled Box for each viewer with hover effects
const ViewerWrap = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: '56.25%', // 16:9 aspect ratio
        borderRadius: '10px',
        boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
        border: '3px solid rgba(249, 249, 249, 0.1)',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 'rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px',
          borderColor: 'rgba(249, 249, 249, 0.8)',
          '& video': {
            opacity: 1,
          },
        },
        '& img': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          transition: 'opacity 500ms ease-in-out 0s',
        },
        '& video': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0,
          transition: 'opacity 500ms ease-in-out 0s',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Viewers;
