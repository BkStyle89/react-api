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
                      <h5 class="card-title mt-2 text-light" >{actress.name}</h5>
                      <img src={actress.image} alt="" />
                      <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-light d-flex justify-content-center">{actress.nationality}</h6>
                        <p class="card-text text-light text-center">{actress.biography}</p>
                        <p className='text-warning'>{actress.awards}</p>
                        <p className='text-danger'>{actress.most_famous_movies}</p>
                        <p className='text-light'>{actress.birth_year} {actress.death_year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {actors.map(actor => (
                <div key={actor.id}>
                  <div className="col">
                    <div class="card rounded" >
                      <h5 class="card-title mt-2 text-light">{actor.name}</h5>
                      <img src={actor.image} alt="" />
                      <div class="card-body">
                        <h6 class="card-subtitle mb-2  text-light d-flex justify-content-center">{actor.nationality}</h6>
                        <p class="card-text text-light text-center">{actor.biography}</p>
                        <p className='text-warning'>{actor.awards}</p>
                        <p className='text-danger'>{actor.known_for}</p>
                        <p className='text-light'>{actor.birth_year}   {actor.death_year} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
    </div>
  )
}
