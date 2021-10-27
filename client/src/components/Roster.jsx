import React, {useState, useEffect} from "react";
import Employee from './Employee.jsx';

function Roster ({ roster }) {
  return (
    <div>
      {roster.map((employee, i) => {
        return (<Employee key={i} employee={employee}/>);
      })}
    </div>
  )
}

export default Roster;