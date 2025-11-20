import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes,setJokes]= useState([])
  useEffect(()=>{
    axios.get('/api/jokes').then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log("error while fetching data",error);
    })
  })
  return (
    <>
      <h1>aao sunau jokes </h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke,index)=>(
         <div key ={joke.id}>
            <h3>{joke.message}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
