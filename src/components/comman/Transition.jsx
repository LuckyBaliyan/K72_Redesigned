import React,{useRef} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';


const Transition = (props) => {
  const stairRefs = useRef([]);
  const parentRef = useRef(null);
  const appRef = useRef(null);

  const trackPageChange = useLocation().pathname;

  useGSAP(()=>{
    const tl = gsap.timeline({});

    tl.to(parentRef.current,{
      display:'block',
    })

    tl.from(stairRefs.current,{
      height:0,
      stagger:{
        amount:-0.28,
      }
    })

    tl.to(stairRefs.current,{
      yPercent:100,
      stagger:{
        amount:-0.28,
      }
    })

    tl.to(parentRef.current,{
      display:'none',
    })

    tl.to(stairRefs.current,{
      yPercent:0,
    })

    gsap.from(appRef.current,{
        display:'none',
        delay:1.2,
        scale:1.2,
    })

  },[trackPageChange]);

  return (
   <div>
    <div ref={parentRef} className='w-full h-screen top-0 !z-[999] fixed'>
       <div className='h-screen w-full flex fixed'>
        {
          Array.from({length:5},(_,i)=>(
            <div ref={(el)=>stairRefs.current[i] = el} key={i} className={`h-full  w-1/5 bg-[#D3FD50]`}></div>
          ))
        }
      </div>
    </div>
    <div ref={appRef}>
        {props.children}
    </div>
   </div>
  )
}

export default Transition