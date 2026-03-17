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
        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-5'>
              {actresses.map(actress => (
                <div  key={actress.id}>
                  <div className="col">
                    <div className="card rounded" >
                      <img src={actress.image} alt="" />
                      <div class="card-body">
                        <h5 class="card-title">{actress.name}</h5>
                        <hr />
                        <h6 class="card-subtitle mb-2 text-muted ">{actress.nationality}</h6>
                        <p class="card-text">{actress.biography}</p>
                        <p>{actress.awards}</p>
                        <p>{actress.birth_year} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {actors.map(actor => (
                <div key={actor.id}>
                  <div className="col">
                    <div class="card rounded" >
                      <img src={actor.image} alt="" />
                      <div class="card-body">
                        <h5 class="card-title">{actor.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted ">{actor.nationality}</h6>
                        <p class="card-text">{actor.biography}</p>
                        <p>{actor.awards}</p>
                        <p>{actor.birth_year} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
    </div>
  )
}
