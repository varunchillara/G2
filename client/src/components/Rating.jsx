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
      <span>Want to work with {employee.name}?</span>
      <span onClick={addOrUpdateLikes}>YES</span>
      <div>{likes} people have said Yes!</div>
  </div>
  )
}

export default Rating;