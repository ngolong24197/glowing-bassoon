import React from 'react';
import Logo from './Header/Logo';
import SearchBox from './Header/Searchbox';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left_navbar}>
        <Logo />
      </div>
      <div style={styles.right_navbar}>
        <SearchBox />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black ',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '10%',
  },
  left_navbar: {
    display: 'flex',
    alignItems: 'center',
  },
  right_navbar: {
    display: 'flex',
    alignItems: 'center',
    marginleft: '40px',
  },
};

export default Navbar;