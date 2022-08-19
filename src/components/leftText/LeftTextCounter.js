import React from 'react'
import "./lefttext.scss"
import CountUp from 'react-countup';

export default function LeftTextCounter() {
  return (
    <div id="left-text-counter">
        <div className="wrapper d-flex">
              <SingleCount number={4} unit="K" desc="Textures" />
              <SingleCount number={60} unit="" desc="Frame Per Second" />
              <SingleCount number={10} unit="" desc="Hotspots" />
        </div>
    </div>
  )
}
function SingleCount({number,unit,desc}) {
    return <div className="singleCounter">
        <div className="numbers"><span><CountUp end={number} /></span><span>{unit}</span></div>
        <div className="number-repr">{desc}</div>
    </div>;
}

