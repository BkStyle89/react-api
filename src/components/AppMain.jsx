import { useState, useEffect } from 'react'

export default function AppMain(){

  const api_url ="https://lanciweb.github.io/demo/api/actors/" 
  const api_link ="https://lanciweb.github.io/demo/api/actresses/"
  const [actors, setActors] =useState([])
  const [actresses,setActresses]=useState([])


  function getActors(){
  fetch(api_url)
  .then(res=>res.json())
  .then(data=>{
    setActors(data)
  })
}
useEffect(getActors,[])

 function getActesses(){
  fetch(api_link)
  .then(res=>res.json())
  .then(data=>{
    setActresses(data)
  })
}
useEffect(getActesses,[]) 

  return (
    <div className='container'>
        <div className='row'>
          <div>
               <ul>
                {actresses.map(actress => (
                  <li className='col-2' key={actress.id}>
                    <div class="card" >
                      <img src={actress.image} alt="" />
                      <div class="card-body">
                        <h5 class="card-title">{actress.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted ">{actress.nationality}</h6>
                        <p class="card-text">{actress.biography}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {actors.map(actor => (
                  <li className='col-2' key={actor.id}>
                    <div class="card" >
                      <img src={actor.image} alt="" />
                      <div class="card-body">
                        <h5 class="card-title">{actor.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted ">{actor.nationality}</h6>
                        <p class="card-text">{actor.biography}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
  )
}