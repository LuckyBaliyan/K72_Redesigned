import React from 'react'

const Video = ({view="cover"}) => {
  return (
    <div className='w-full h-full'>
        <video src="videos/hero.mp4" autoPlay muted loop className={`w-full h-full object-cover`}></video>
    </div>
  )
}

export default Video