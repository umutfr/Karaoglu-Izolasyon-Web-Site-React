import React from 'react'
import Beams from './ui/Beams'

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Beams
        beamWidth={1.5}
        beamHeight={15}
        beamNumber={3}
        lightColor="#fff"
        speed={2}
        noiseIntensity={2}
        scale={0.2}
        rotation={30}
      />
    </div>
  )
}

export default Background
