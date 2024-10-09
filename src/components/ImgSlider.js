import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { fetchPopularMovies } from "../api/Api";
import React, { useEffect, useState } from 'react';

const ImgSlider = (props) => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchPopularMovies();
                setMovies(data.results.slice(0, 10)); 
            } catch (error) {
                console.log(error);
            }
        };

        getMovies();
    }, []);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            {movies.map((movie) => (
                <Wrap key={movie.id}>
                    <a style={{marginLeft:"50px", marginRight:"50px"}}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{width:"500px"}}
                        />
                    </a>
                </Wrap>
            ))}
        </Carousel>
    );
};

const Carousel = styled(Slider)`
    margin-top: 20px;
    width: 100%; 
    height: 500px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: hidden;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    width: 100%; 
    height: 500px;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: flex; 
        justify-content: center;
        align-items: center; 
        height: 100%; 
        border: 4px solid rgba(249, 249, 249, 0.8); 

        img {
            max-width: 100%; // Ensure image does not overflow
            max-height: 100%; // Ensure image does not overflow
            object-fit: contain; // Maintain aspect ratio and center image
        }
    }
`;

export default ImgSlider;
