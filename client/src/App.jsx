import React, {useState, useEffect} from "react";
import axios from 'axios';
import Roster from './components/Roster.jsx';
import Header from './components/Header.jsx';

function App (props) {
  const [roster, setRoster] = useState([]);
  const [likes, setLikes] = useState({});

  const getLikes = () => {
    axios.get('http://localhost:3000/likes')
    .then(({ data }) => {
      setLikes(data);
    })
  }

  useEffect(() => {
    axios.get('https://coding-assignment.g2crowd.com/')
    .then(({ data }) => {
      setRoster(data)
    })
  }, [])

  useEffect(() => {
    getLikes();
  }, [roster])

  return (
    <div>
      <Header />
      <Roster getLikes={getLikes} likes={likes} roster={roster} />
    </div>
    );
}

export default App;