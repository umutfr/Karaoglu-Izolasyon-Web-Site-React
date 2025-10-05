import React from 'react'
import DarkVeil from './ui/DarkVeil'


const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
       <DarkVeil/>
    </div>
  )
}

export default Background
