import React from 'react';
import axios from 'axios';

function Rating ({ getLikes, likes, employee }) {
  const addOrUpdateLikes = () => {
    if (likes === 0) {
      axios.post('/like', {name: employee.name})
      .then(() => {
        getLikes();
      })
    } else {
      axios.put('/like', {name: employee.name})
      .then(() => {
        getLikes();
      })
    }
  }
  return (
    <div className="rating">
      <span className="bold">Want to work with {employee.name}?</span>
      <a className="like_button" onClick={addOrUpdateLikes}>
        <img className="thumb" width="15px" src="/thumbs" />
        YES!
      </a>
      <div> <span className="bold"> {likes} </span> people have said Yes!</div>
  </div>
  )
}

export default Rating;