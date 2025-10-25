import React,{useRef} from 'react'
import HeroAgents from '../components/agents/HeroAgents'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import Footer from '../components/comman/Footer';


gsap.registerPlugin(ScrollTrigger);

const Agents = () => {
  const imageRef = useRef(null);
  const figRef = useRef(null);


  const images = Array.from({length:12},(_,i = 1)=> `/images/${i+1}.jpg`);

  useGSAP(()=>{
     gsap.set(imageRef.current,{clipPath:'polygon(0% 0%, 0% 100%, 0 100%, 0 0)',x:-20});

     gsap.to(imageRef.current,{
      clipPath:'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      x:0,
      duration:0.8,
      delay:1.4,
      ease:"power3.inOut"
     });

     gsap.to(imageRef.current,{
        scrollTrigger:{
          trigger:imageRef.current,
          start:'top top',
          end:'top -100%',
          pin:true,
          pinSpacing:true,
          invalidateOnRefresh:true,
          anticipatePin:1,
          pinType:'transform',
          pinReparent:true,
          scrub:1,
          onUpdate:(self)=>{
           let progress = self.progress;
           let selectedImage  = Math.floor(progress*images.length);
           if(progress === 1) figRef.current.src = images[images.length -1];
           else figRef.current.src = images[selectedImage];
          }
        }
     })

  },[])

  return (
   <div >

    <div  className='w-full pb-30 !bg-white min-h-screen section1 relative py-1'>
      <div ref={imageRef} className='h-[20vw] z-[0] w-[15vw]   absolute top-50 left-[30vw] overflow-hidden rounded-2xl'>
        <img ref={figRef} src="/images/1.jpg" alt="" />
      </div>
      <div className='z-20 relative'>
        <HeroAgents />
      </div>
    </div>

    <div>
      <Footer />
    </div>

   </div>
  )
}

export default Agents