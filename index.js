import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from
  './components/LatestMovieReviewsContainer'
;
import SearchableMovieReviewsContainer from
  './components/SearchableMovieReviewsContainer'
;

ReactDOM.render(
  <div className="app">
    <div className="row">
      <div className="col-md-4 offset-md-2">
        <h1>Latest Movie Reviews</h1>
        <LatestMovieReviewsContainer />
      </div>
      <div className="col-md-4">
        <h3>Or Search For a Review Here:</h3>
        <SearchableMovieReviewsContainer />
      </div>
    </div>
  </div>,
  document.getElementById('container')
);

require('./test/index-test.js'); // Leave this in!
