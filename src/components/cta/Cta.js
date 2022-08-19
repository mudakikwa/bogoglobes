import React from 'react'
import "./cta.scss"

export default function Cta() {
  return (
    <div id="cta">
          <div className="wrapper">
              <div className="pre-text">Hello There I Am Fred And I Am</div>
              <div className="main-text">Find a perfect Globe for
                  your next website.</div>
              <div className="desc-text">Bogota globe is a collection of WebGL globes that can easily be integrated into your website with just a few lines of code, It was created to make the process of displaying globe-related data fast.</div>
          </div>
          <div className="d-flex btn-wrapper">
              <Button image="./images/globeimage.jpg" text="Get Custom Globe" />
              <Button image="./images/blacksmith.svg" text="Who Is The Black Smith?" />
          </div>
    </div>
  )
}
function Button({image,text}) {
    return <div className="custom-globe-btn">
        <div className="d-flex">
            <div className="img" style={{
                backgroundImage:`url("${image}")`
            }}></div>
            <div className="btn-text">{text}</div>
        </div>
    </div>
}

