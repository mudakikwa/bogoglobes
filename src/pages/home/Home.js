import React from 'react'
import Cta from '../../components/cta/Cta'
import LeftTextCounter from '../../components/leftText/LeftTextCounter'
import Logo from '../../components/logo/Logo'
import Planets from '../../components/planets/Planets'
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
      </div>
    </div>
  )
}
