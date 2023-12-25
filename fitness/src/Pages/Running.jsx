import React from 'react'
import Timer from '../component/Timer/Timer'
import Clock from '../component/Clock/Clock'
import './Running.css'
import Map from '../component/Map/Map'
import RunningSpeedTracker from '../component/RunningSpeedTracker/RunningSpeedTracker'

const Running = () => {
  return (
    <>
    <div className='clock'>
        <Clock/>
    </div>
    <div className='timer'>
        <Timer/>
    </div>
    <div className='SpeedTracker'>
        <RunningSpeedTracker/>
        
    </div>
    <div className='map'>
        <Map/>
        </div>    
    </>
  )
}

export default Running