import React, { useState } from 'react'
import "./planets.scss"

export default function Planets() {
    const [currentPlanet, setcurrentPlanet] = useState(0)
    const data = [
        {
            image: "./images/venus.jpg",
            text: "Venus"
        },
        {
            image: "./images/earth.jpg",
            text: "Earth"
        },
        {
            image: "./images/jupiter.jpg",
            text: "Jupiter"
        },
        {
            image: "./images/mars.jpg",
            text: "Mars"
        },
        {
            image: "./images/saturn.jpg",
            text: "Saturn"
        },
        {
            image: "./images/moon.jpg",
            text: "Earth Moon"
        },
    ]
    return (
        <div id="planets">
            {data.map((item, idx) => {
                return <SinglePlanet image={item.image} text={item.text} planets={{ currentPlanet, setcurrentPlanet }} id={idx} key={idx} />
            })}
        </div>
    )
}
function SinglePlanet({ image, text, planets, id }) {
    const { currentPlanet, setcurrentPlanet } = planets
    const handleClick = () => {
        setcurrentPlanet(id)
    }
    return <>
        {(currentPlanet!==id) ? <div className="d-flex single-planet clickable" onClick={handleClick}>
            <div className="rounded-container">
                <div className="rounded-circle" style={{ backgroundImage: `url("${image}")` }}></div>
            </div>
            <div className="planet-text">{text}</div>
        </div>
            : <div className="single-planet planet-clicked clickable" onClick={handleClick}>
                <div className="rounded-container">
                    <div className="rounded-circle" style={{ backgroundImage: `url("${image}")` }}></div>
                </div>
                <div className="planet-text">{text}</div>
            </div>
        }
    </>
}

