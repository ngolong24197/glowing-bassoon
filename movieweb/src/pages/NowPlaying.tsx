import React from 'react';
import Filter from '../component/Sidebar/Filter';
import Display from '../component/Display';
import '../component/Display.css';

const NowPlaying = () => {
  return (
    <div className="display-wrapper">
      <div className="filter-section">
        <Filter />
      </div>
      <div className="content-section">
        <Display />
      </div>
    </div>
  );
};

export default NowPlaying;