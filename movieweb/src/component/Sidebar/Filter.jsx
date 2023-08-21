import React, { useState } from 'react';
import './Filter.css';

const MovieSorter = () => {
  const [sortOption, setSortOption] = useState('everything');
  const [searchAllRelease, setSearchAllRelease] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [userScore, setUserScore] = useState(5);
  const [minimumVotes, setMinimumVotes] = useState(0);
  const [runtime, setRuntime] = useState(0);
  const [keyword, setKeyword] = useState('');

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSearchAllReleaseChange = (event) => {
    setSearchAllRelease(event.target.checked);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleGenreSelection = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleUserScoreChange = (event) => {
    setUserScore(Number(event.target.value));
  };

  const handleMinimumVotesChange = (event) => {
    setMinimumVotes(Number(event.target.value));
  };

  const handleRuntimeChange = (event) => {
    setRuntime(Number(event.target.value));
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform filtering logic or call an API with the selected options
    console.log('Filtering movies...');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3>Filter</h3>
          <div className="divider" />
          <label>
            Show me:
            <select value={sortOption} onChange={handleSortOptionChange}>
              <option value="everything">Everything</option>
              <option value="notSeen">Movie I haven't seen</option>
              <option value="seen">Movie I have seen</option>
            </select>
          </label>
          <label>
            Release Date:
            <input
              type="checkbox"
              checked={searchAllRelease}
              onChange={handleSearchAllReleaseChange}
            />
            Search all release
          </label>
          <label>
            From Date:
            <input
              type="date"
              value={fromDate}
              onChange={handleFromDateChange}
            />
          </label>
          <label>
            To Date:
            <input type="date" value={toDate} onChange={handleToDateChange} />
          </label>
        </div>

        <div className="section">
          <h3>Genres</h3>
          <div className="divider" />
          <div className="genre-options">
            <label>
              <input
                type="checkbox"
                checked={selectedGenres.includes('action')}
                onChange={() => handleGenreSelection('action')}
              />
              Action
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedGenres.includes('comedy')}
                onChange={() => handleGenreSelection('comedy')}
              />
              Comedy
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedGenres.includes('drama')}
                onChange={() => handleGenreSelection('drama')}
              />
              Drama
            </label>
            {/* Add more genre checkboxes as needed */}
          </div>
        </div>

        <div className="section">
          <h3>User Score</h3>
          <div className="divider" />
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={userScore}
            onChange={handleUserScoreChange}
          />
          <p>User Score: {userScore}</p>
        </div>

        <div className="section">
          <h3>Minimum with User Votes</h3>
          <div className="divider" />
          <input
            type="range"
            min={0}
            max={500}
            step={100}
            value={minimumVotes}
            onChange={handleMinimumVotesChange}
          />
          <p>Minimum Votes: {minimumVotes}</p>
        </div>

        <div className="section">
          <h3>Run Time</h3>
          <div className="divider" />
         Apologies for the incomplete response in the previous message. Here's the remaining code:

```jsx
          <input
            type="range"
            min={0}
            max={300}
            step={30}
            value={runtime}
            onChange={handleRuntimeChange}
          />
          <p>Run Time: {runtime} minutes</p>
        </div>

        <div className="section">
          <h3>Keyword Search</h3>
          <div className="divider" />
          <input
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Enter a keyword"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MovieSorter;