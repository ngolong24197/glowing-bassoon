import React from 'react';
import Banner from '../component/Banner';
import MovieCarousel from '../component/MovieCarousel';
import NowPlayingCarousel from '../component/NowPlayingCarousel'

const Homepage = () => {
  return (
    <div>
      <Banner />
      <br />
      <h1 style={{ color: 'white', backgroundColor: 'rgb(45, 46, 55)', width: '100%', textAlign: 'left' }}>
        Popular Movie
      </h1>
      <NowPlayingCarousel/>
      <h1 style={{ color: 'white', backgroundColor: 'rgb(45, 46, 55)', width: '100%', textAlign: 'left' }}>
        Now playing
      </h1>
      <MovieCarousel />
    </div>
  );
};

export default Homepage;