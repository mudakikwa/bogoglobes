import React from 'react'
import Logo from '../../components/logo/Logo'
import "./index.scss"

export default function Home() {
  return (
    <div className="d-flex" id="home">
      <div className="left-size">
        <Logo />  
      </div>
      <div className="right-size"></div>
    </div>
  )
}
