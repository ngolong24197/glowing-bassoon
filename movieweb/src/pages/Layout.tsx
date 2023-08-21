import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlay, FaFire } from 'react-icons/fa';
import Logo from '../component/Header/Logo';
import SearchBox from '../component/Header/Searchbox';
import '../component/Header/Header.css';

const Layout = ({ children }) => {
  const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to="/NowPlaying">
                <FaPlay />
                Now Playing
              </Link>
            </li>
            <li>
              <Link to="/Popular">
                <FaFire />
                Popular
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <SearchBox />
        </div>
      </header>
    );
  };

  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;