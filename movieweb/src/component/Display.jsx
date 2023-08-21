import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 9;

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing', {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8',
        },
      })
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderMovies = () => {
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const currentMovies = movies.slice(startIndex, endIndex);

    const rows = [];
    for (let i = 0; i < currentMovies.length; i += 3) {
      const rowMovies = currentMovies.slice(i, i + 3);
      const row = (
        <div key={`row-${i}`} className="movie-row">
          {rowMovies.map((movie) => (
            <div key={movie.id} className="movie">
              <h3>{movie.title}</h3>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      );
      rows.push(row);
    }

    return rows;
  };

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <div>
      <div className="movie-container">
        {renderMovies()}
      </div>

      <div className="pagination">
        {Array.from(Array(totalPages).keys()).map((page) => (
          <button
            key={page + 1}
            className={currentPage === page + 1 ? 'active' : ''}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Display;