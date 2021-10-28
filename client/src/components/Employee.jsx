import React, {useState, useEffect} from "react";
import Rating from './Rating.jsx';

function Employee ({ getLikes, likes, employee }) {
  return (
    <>
      <div className="container">
        <div className="post">
          <img className="width100" src={employee['image_url']} />
          <div className="info">
            <div className="top">
              <div className="name">{employee.name}</div>
              <div className="title">{employee.title}</div>
            </div>
            <div className="bio">{employee.bio}</div>
            <Rating getLikes={getLikes} likes={likes} employee={employee} />
          </div>
        </div>
      </div>
      <hr className="breakLine"/>
    </>
  )
}

export default Employee;

// {name: 'Dan Knox',
// image_url: 'https://media.g2crowd.com/wp-content/uploads/2018/06/18085553/9N9B3247.jpg',
// title: 'Sr. Director of Engineering',
// bio: 'Dan has enjoyed being paid to do something that he… horrible dad jokes that get plenty of eye rolls.'}