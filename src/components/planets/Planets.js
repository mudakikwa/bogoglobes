import React from 'react'
import "./planets.scss"

export default function Planets() {
  return (
    <div id="planets">
          <SinglePlanet image="./images/venus.jpg" text="Venus" />
          <SinglePlanet image="./images/earth.jpg" text="Earth" />
          <SinglePlanet image="./images/jupiter.jpg" text="Jupiter" />
          <SinglePlanet image="./images/mars.jpg" text="Mars" />
          <SinglePlanet image="./images/saturn.jpg" text="Saturn" />
          <SinglePlanet image="./images/moon.jpg" text="Earth Moon" />
    </div>
  )
}
function SinglePlanet({image,text}) {
    return <div className="d-flex single-planet">
        <div className="rounded-circle" style={{ backgroundImage: `url("${image}")` }}></div>
        <div className="planet-text">{text}</div>
    </div>
}

