import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='flex items-center justify-center gap-6'>
        <Link className='!font-[Lusane2] text-white uppercase text-[6vw]
        border-3  pt-1 leading-[6vw]  pb-1 border-white rounded-full px-8
         hover:text-[#D3FD50] hover:border-[#D3FD50]'>Projects</Link>
        <Link className='!font-[Lusane2] text-white uppercase text-[6vw]
        border-3  pt-1 leading-[6vw]  pb-1 border-white rounded-full px-8
         hover:text-[#D3FD50] hover:border-[#D3FD50]'>Agents</Link>
    </div>
  )
}

export default HomeBottom;