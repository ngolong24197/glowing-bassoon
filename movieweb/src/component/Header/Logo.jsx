import React from 'react';
import { Link } from 'react-router-dom';

const MovieVennieLogo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div style={styles.container_logo}>
        <h1 style={styles.text_logo}>MovieVennie</h1>
      </div>
    </Link>
  );
};

const styles = {
  container_logo: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logo: {
    height: '40px',
    marginRight: '8px',
  },
  text_logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
    color: 'white',
  },
};

export default MovieVennieLogo;