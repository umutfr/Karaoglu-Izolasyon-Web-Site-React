import React from 'react'
import Silk from './ui/Silk'
import PixelBlast from './ui/PixelBlast'


const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-black">
      <PixelBlast
    variant="diamond"
    pixelSize={6}
    color="#414141"
    patternScale={3}
    patternDensity={1.2}
    pixelSizeJitter={0.5}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.6}
    edgeFade={0.25}
    transparent
  />
    </div>
  )
}

export default Background
