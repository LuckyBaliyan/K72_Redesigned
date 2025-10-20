import React from 'react'
import Video from './Video'

const HomeHero = () => {
  return (
    <div className='!font-[Lusane2] pt-5 text-white'>
        <div className='text-[9.5vw] text-center uppercase leading-[8vw]'>The spark for</div>
        <div className='text-[9.5vw] flex items-center justify-center text-center uppercase leading-[8vw]'>all 
            <div className='h-[6.5vw] mb-2 w-[16vw] rounded-full overflow-hidden'>
                <Video view='cover'/>
            </div> 
        things</div>
        <div className='text-[9.5vw] text-center uppercase leading-[8vw]'>creative</div>
    </div>
  )
}

export default HomeHero