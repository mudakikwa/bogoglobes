import React from 'react'
import "./textures.scss"

export default function Textures() {
    const data = [
        {
            text: "red",
            background:"./images/oiltex.jpg"
        },
        {
            text: "blue",
            background: "./images/oil2.jpg"
        },
        {
            text: "green",
            background: "./images/oil2.jpg"
        },
        {
            text: "yellow",
            background: "./images/ab3.jpg"
        },
        {
            text: "cyan",
            background: "./images/ab2.jpg"
        },
        {
            text: "lightblue",
            background: "./images/ab4.jpg"
        },
        {
            text: "lightblue",
            background: "./images/ab4.jpg"
        },
        {
            text: "lightblue",
            background: "./images/ab4.jpg"
        },
    ]
    return (
        <div id="textures">
            <div className="title">Optional Textures </div>
            <div className="wrapper d-flex">
                {data.map((item,idx)=>{
                    return <SingleTexture number={idx+1} text={item.text} background={item.background} key={idx} />
                })}
            </div>
        </div>
    )
}
function SingleTexture({ number,text,background }) {
    return <div className="single-texture" style={{backgroundImage:`url("${background}")`}}>
        <div className="text">0<span>{number}</span></div>
        <div className="texture-name">{text}</div>
    </div>
}

