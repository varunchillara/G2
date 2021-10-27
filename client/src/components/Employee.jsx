import React, {useState, useEffect} from "react";

function Employee ({ employee }) {
  return (
    <>
      <div className="container">
        <div className="post">
          <img width="250" height="250" src={employee['image_url']} />
          <div className="info">
            <div className="name">{employee.name}</div>
            <div className="title">{employee.title}</div>
            <div className="bio">{employee.bio}</div>
            <div>Want to work with {employee.name}?</div>
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