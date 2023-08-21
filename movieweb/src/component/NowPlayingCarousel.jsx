import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const NowPlayingCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //
    axios.get('https://api.themoviedb.org/3/movie/popular',
     {

        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmRhMGViMzYwYmJhNDBkZjEwNWUyODg1MGQyYmVlNCIsInN1YiI6IjY0ZGUwMWRkYTNiNWU2MDExYzQwMzlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.61ziFVK39jXEzXXTZH0Vfwx3267ieybFb6IAYLncV2g'
          }
    }
    )
      .then(response => {
        console.log(response)
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  }, []);


  return (
    <>

<div className="container">
<Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={2} >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-item">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: '80%',
                  height: 'auto',
                }}
              />
              <p 
              style={{
                fontSize: '18px',
                color: 'white',
                marginTop: '10px',
              }}>{movie.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default NowPlayingCarousel;