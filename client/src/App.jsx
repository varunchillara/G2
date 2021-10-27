import React, {useState, useEffect} from "react";
import axios from 'axios';
import Roster from './components/Roster.jsx';
import Header from './components/Header.jsx';

function App (props) {
  const [roster, setRoster] = useState([]);

  useEffect(() => {
    axios.get('https://coding-assignment.g2crowd.com/')
    .then(({ data }) => {
      setRoster(data)
    })
  }, [])

  return (
    <div>
      <Header />
      <Roster roster={roster} />
    </div>
    );
}

export default App;