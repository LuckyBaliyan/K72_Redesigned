import { useGSAP } from '@gsap/react'
import React,{useRef} from 'react'
import gsap from 'gsap';

const HeroAgents = () => {
  const headingRefs = useRef([]);
  useGSAP(()=>{
      gsap.to(headingRefs.current,{
       y:0,
       duration:1,
       ease:'power3.inOut',
      })
  })

  return (
    <div className='font-[Lusane2]'>
      <div className='mt-[55vh]'>
        <h1 className='text-[20vw] !text-black text-center  uppercase leading-[18vw] overflow-hidden'>
          <div className='translate-y-[-400%]' ref={el=>headingRefs.current[0] = el}>SEVEN7Y</div>
        </h1>
        <h1 className='text-[20vw] !text-black text-center  uppercase leading-[18vw] overflow-hidden'>
          <div className='translate-y-[-400%]' ref={el=>headingRefs.current[1] = el}>TWO</div>
        </h1>
      </div>
      <div>
        <p className='!text-black text-5xl pr-2 pl-[40%]'>
        {
          Array.from({length:16},(_,i)=>(
            <span key={i} className='inline-block'>&nbsp;</span>

        ))}
        We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. 
          A brand is a living thing, with values, 
          a personality and a story. If we ignore that, we can achieve short-term success, 
          but not influence that goes the distance. We bring that perspective to every brand story we help tell.
        </p>
      </div>
    </div>
  )
}

export default HeroAgents