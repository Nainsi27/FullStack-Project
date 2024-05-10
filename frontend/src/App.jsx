import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';



function App() {
  const [jokes, setJokes] = useState([]);


  // useEffect(() => {
  //     // Make a request for a joke API
  //    axios.get('/api/jokes')
  //   //  axios.get('http://localhost:4000/api/jokes')
  //         .then((response) => {
  //             setJokes(response.data)
  //         })
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //   }, []);

    useEffect(() => {
      // Make a request for jokes from the API
      axios.get('/api/jokes')
        .then((response) => {
          setJokes(response.data);
        })
        .catch((error) => {
          console.error('Error fetching jokes:', error);
        });
    });
 


  return (
    <>
      <h1>Full stack code by Nancy</h1> 
      <p>JOKES : {jokes.length}</p>


      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}


    </>
  )
}

export default App;
