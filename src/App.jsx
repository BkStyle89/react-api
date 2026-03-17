import { useState, useEffect } from 'react'

function App() {
  const api_url ="https://lanciweb.github.io/demo/api/actresses/" 
  const api_link ="https://lanciweb.github.io/demo/api/actors/"
  const [actors, setActors] =useState([])


function getActors(){
  fetch(api_url)
  .then(res=>res.json())
  .then(data=>{
    setActors(data)
  })
}
useEffect(getActors,[])

  return (
    <>
      <div className='container'>
        <div className='row'>
               <ul>
                {actors.map(actor => (
                  <li key={actor.id}>
                  <img src={actor.image} alt="" /><br />
                  {actor.name}
                  </li>
                ))}
                </ul>
          </div>
        </div>
    </>
  )
}

export default App
