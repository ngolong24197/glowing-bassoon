import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaPlay, FaFire } from 'react-icons/fa';
import './Layout.css';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './Header/Searchbox';



const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Logo/>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/"> <FaHome />Home</Link>
          </li>
          <li>
            <Link to="/NowPlaying"><FaPlay />Now Playing</Link>
          </li>
          <li>
            <Link to="/Popular">  <FaFire />Popular</Link>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
       <SearchBox />
      </div>
    </header>
  );
};

export default Header;