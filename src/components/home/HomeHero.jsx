import React,{useRef} from 'react'
import Video from './Video'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeHero = () => {
  const headingsRef = useRef([]);

  useGSAP(()=>{
    gsap.to(headingsRef.current,{
      y:0,
      ease:'power3.out',
      delay:1.5,
    })
  })

  return (
    <div className='!font-[Lusane2] pt-5 text-white'>
        <div  className='text-[9.5vw] text-center uppercase leading-[8vw] overflow-hidden'>
          <h1 ref={el => headingsRef.current[0] = el} className="translate-y-[-200%]">
            The spark for
          </h1>
        </div>
        <div className='text-[9.5vw] flex items-center justify-center text-center overflow-hidden uppercase leading-[8vw]'>
          <h1 ref={el => headingsRef.current[1] = el} className="translate-y-[-200%]">
            all
          </h1>
            <div className='h-[6.5vw] mb-2 w-[16vw] rounded-full overflow-hidden'>
                <Video view='cover'/>
            </div> 
          <h1 ref={el => headingsRef.current[2] = el} className="translate-y-[-200%]">
           things
          </h1>
        </div>
        <div className='text-[9.5vw] text-center uppercase leading-[8vw] overflow-hidden'>
          <h1 ref={el => headingsRef.current[3] = el} className="translate-y-[-200%]">
           Creative
          </h1>
        </div>
    </div>
  )
}

export default HomeHero