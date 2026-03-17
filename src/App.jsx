import { useState } from 'react'

function App() {
  const api_url ="https://lanciweb.github.io/demo/api/actresses/" 
  const api_link ="https://lanciweb.github.io/demo/api/actors/"
  const [actors, setActors] =useState([])


function getActors(){
  fetch(api_url,api_link)
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
          <div className='col'>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
