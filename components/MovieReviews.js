import React from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'


function MovieReviews(props){
  let reviewDisplay = props.reviews.map((review, i) => {
    return (
      <div className="card" key={i}>
        <img className="card-img-top" src="http://placekitten.com/325/250" alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{review.display_title}</h4>
          <p className="card-text">{review.byline} || {review.publication_date}</p>
          <p>{review.summary_short}</p>
        </div>
      </div>
    )
  })

  return(
    <div className="review-list">
      { reviewDisplay }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: React.PropTypes.array //this is deprecated, but still works for this lab
};

export default MovieReviews


// property passed in from LatestMovieReviewsContainer
/* <MovieReviews reviews={this.state.reviews} /> */
