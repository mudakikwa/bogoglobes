import React from 'react'
import Arrows from '../../components/arrows/Arrows'
import Cta from '../../components/cta/Cta'
import LeftTextCounter from '../../components/leftText/LeftTextCounter'
import Logo from '../../components/logo/Logo'
import Planets from '../../components/planets/Planets'
import Textures from '../../components/textures/Textures'
import "./index.scss"

export default function Home() {
  return (
    <div className="d-flex" id="home">
      <div className="left-size">
        <Logo /> 
        <Cta />
        <Planets /> 
      </div>
      <div className="right-size">
        <LeftTextCounter />
        <Arrows />
        <Textures />
      </div>
    </div>
  )
}
