import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import { fetch } from 'whatwg-fetch'; //import this for Fetch() to be defined

class LatestMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.state = {
      reviews:[]
    }
  }

  //1, 2
  componentWillMount(){
    const KEY = 'd556c4d3c6d745a1bf4850e8a1428de8'
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=' + KEY;
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data.results }) ) //3, 4
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer


// 1 .then(console.log("hello you")) // Remember to complete template for other container or it throws you an error (err: expected string, but got object)
// 2 .then((data => this.setState({ reviews: JSON.parse(data.reviews) }) ))
// 3 .then(data => console.log(data.results));
// 4 .then(data => this.setState({ reviews: data.results}));
