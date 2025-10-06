import React from 'react'
import PixelBlast from './ui/PixelBlast'
import Silk from './ui/Silk'


const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-black">
      <Silk
        speed={5}
          scale={1}
          color="#410f0f"
          noiseIntensity={0}
          rotation={0}

      />
    </div>
  )
}

export default Background
