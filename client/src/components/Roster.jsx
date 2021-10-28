import React, {useState, useEffect} from "react";
import Employee from './Employee.jsx';

function Roster ({ getLikes, likes, roster }) {
  return (
    <div>
      {roster.map((employee, i) => {
        return (<Employee key={i} getLikes={getLikes} likes={likes[employee.name] || 0} employee={employee}/>);
      })}
    </div>
  )
}

export default Roster;