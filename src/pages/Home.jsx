import React from 'react'
import Video from '../components/home/Video'
import HomeHero from '../components/home/HomeHero'
import HomeBottom from '../components/home/HomeBottom'
import Para from '../components/home/Para'
import Clock from '../components/comman/Clock'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <div className='h-screen w-screen fixed z-10'>
            <Video />
        </div>
        <Para />
        <div className='h-screen w-screen  flex flex-col justify-between z-20 relative'>
            <HomeHero />
            <HomeBottom />
        </div>
        <div className="fixed bottom-0 left-0 z-80 pb-4 pl-2">
            <Clock />
        </div>
    </div>
  )
}

export default Home