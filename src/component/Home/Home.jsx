import "./Home.css"
import FIDO from "/fido-dido.jpg"

import React from 'react'

const Home = () => {
  return (
    <main>

     <div className="heroContainer">

     <div className="heroText">

  <h1>Lorem ipsum dolor sit amet.</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quia odio eos.</p>

</div>


<div className="imgCon">

<img src={FIDO} alt="" />

</div>

     </div>

    </main>
  )
}

export default Home