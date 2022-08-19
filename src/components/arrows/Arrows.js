import React from 'react'
import LeftArrow from './src/LeftArrow'
import "./arrows.scss"

export default function Arrows() {
  return (
    <div id="arrows">
        <div className="wrapper d-flex">
              <div className="left-arrow"><LeftArrow /></div>
              <div className="right-arrow"><LeftArrow /></div>
        </div>
    </div>
  )
}
