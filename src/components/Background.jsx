import React from 'react'
import PixelBlast from './ui/PixelBlast'


const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-black">
       <PixelBlast
        variant="diamond"
        pixelSize={6}
        color="#7f1d1d"
        patternScale={2}
        patternDensity={1}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.5}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.5}
        edgeFade={0.25}
  />
    </div>
  )
}

export default Background
