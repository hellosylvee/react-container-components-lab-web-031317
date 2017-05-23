import React, { Component } from 'react'
import MovieReviews from './MovieReviews'
import { fetch } from 'whatwg-fetch';

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      search: "",
      reviews:[]
    }
    this.retrieveReviewsFromQuery = this.retrieveReviewsFromQuery.bind(this)
  }

  handleInput(e){
    this.setState({ search: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault()
    this.retrieveReviewsFromQuery()
  }

  retrieveReviewsFromQuery(){
    let query = this.state.search
    const KEY = 'd556c4d3c6d745a1bf4850e8a1428de8'
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=' + KEY + '&query=' + query
    fetch(URL)
    .then(res => {
      return res.json()
    })
    .then(data => this.setState({ reviews: data.results }) )
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Search for a review" value={this.state.search} onChange={this.handleInput.bind(this)} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
