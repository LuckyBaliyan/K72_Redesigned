import React,{useRef,useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NavContext } from '../../context/NavProvider';

const FullScreenNav = () => {
  const color = useLocation().pathname;
  const newStairRefs = useRef([]);
  const fullnavLinkRef = useRef(null);
  const fullScreenNavRef = useRef(null);
  const linkRefs = useRef([]);

  const navigate = useNavigate();

  const {navOpen,setNavOpen} = useContext(NavContext);

  console.log(navOpen);

  const handleNavigate = (route)=>{
    if(route === "w") navigate("/projects");
    if(route === "a") navigate("/agents");

    setNavOpen(false);
  }


  function gsapAnimation(){
    const tl = gsap.timeline();

    tl.to(fullScreenNavRef.current,{display:'block'})

    tl.to(newStairRefs.current,{
        height:'100%',
        stagger:{amount:-0.3},
        duration:0.5,
    })

    tl.to(fullnavLinkRef.current, {
      opacity: 1,
    })

    tl.to(linkRefs.current,{
      opacity: 1,
      rotateX: 0,
      transformOrigin: "top top",
      perspective: 400,
      stagger: 0.1,
    })
  }

function gsapReverseAnimation() {
  const tl = gsap.timeline();

  tl.to(linkRefs.current, {
    opacity: 0,
    rotateX: 90,
    stagger: 0.1,
    duration:0.3,
  },"a").to(
    fullnavLinkRef.current,
    {
      opacity: 0,
    },"a"
  ).to(newStairRefs.current, {
    height: 0,
    stagger: { amount: -0.3 },
  },"a");

  tl.to(fullScreenNavRef.current,{display:'none'})

}

useGSAP(() => {
  if (navOpen) {
    gsapAnimation();
  } else {
    gsapReverseAnimation();
  }
}, [navOpen,navigate]);

  return (
        <div id='fullscreeen' ref={fullScreenNavRef} className='hidden h-screen w-full  absolute top-0 left-0 z-60'>
            <div className='w-full h-screen fixed '>
                 <div className='h-screen w-full flex '>
                  {
                    Array.from({length:5},(_,i)=>(
                      <div ref={(el)=>newStairRefs.current[i] = el} key={i} className={`h-full  w-1/5 bg-[#020202]`}></div>
                    ))
                  }
                </div>
            </div>
           <div ref={fullnavLinkRef} className='relative'>
            <div className='flex w-full justify-between p-4 relative items-start'>
                <div>
                    <svg fill={`white`}  
                    xmlns="http://www.w3.org/2000/svg" width="103" 
                    height="44" viewBox="0 0 103 44">
                       <path fillRule="evenodd" 
                       d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 
                       L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 
                       L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,
                       0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 
                       L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 
                       L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 
                       L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,
                       16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z 
                       M-1.30398043e-14,43.9278953 L8.78642762,
                       43.9278953 L8.78642762,0.0057591623 
                       L-1.30398043e-14,
                       0.0057591623 L-1.30398043e-14,43.9278953 
                       Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,
                       43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 
                       L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,
                       25.3437696 Z">
                       </path>
                    </svg>
                </div>
                <div onClick={()=>setNavOpen(false)} className='h-32 absolute top-4 cursor-pointer right-2 w-32 '>
                   <div className='h-32 w-0.5 left-5 origin-top -rotate-45 absolute bg-white cursor-pointer 
                   '></div>
                   <div className='h-32 w-0.5 right-2 origin-top rotate-45 absolute bg-white cursor-pointer 
                   '></div>
                </div>
            </div>
            <div id='all-links' className='uppercase py-15'>
                <div ref={el => linkRefs.current[0] = el} className='border-y-[0.02px] relative   marquee-container border-[#d5d5d5]'>
                    <h1 onClick={()=>handleNavigate("w")} className='text-[9vw] relative leading-[0.8] tracking-tight pt-4 cursor-pointer text-center'>Work</h1>
                    <div className='absolute pointer-events-none top-0 scale-y-105
                     bg-[#D3FD50] h-[102%] cursor-pointer  
                      left-0 flex marquee'>
                        <div className=' flex  items-center gap-4'>
                        <h2 className='whitespace-nowrap '>
                            See Evrything
                        </h2>
                        <img  src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            See Everything
                        </h2>
                        <img src="/images/nav.jpg" alt=""/>
                      </div>
                      <div className='flex  items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                            See Evrything
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            See Everything
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex   items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                            See Evrything
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            See Everything
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex  items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                            See Evrything
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            See Everything
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex   items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                            See Evrything
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            See Everything
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                    </div> 
                </div>
                <div ref={el => linkRefs.current[1] = el} className='border-y-[0.02px] relative  border-[#d5d5d5] marquee-container'>
                    <h1  onClick={()=>handleNavigate("a")} className='text-[9vw] relative leading-[0.8] tracking-tight pt-4 cursor-pointer text-center'>
                        Agency
                    </h1>
                    <div className='absolute pointer-events-none top-0 scale-y-105  translate-x-[0%] 
                     bg-[#D3FD50] h-[102%] cursor-pointer  
                     -translate-y-[0%] left-0 flex marquee'>
                        <div className=' flex  items-center gap-4'>
                        <h2 className='whitespace-nowrap '>
                            Know Us 
                        </h2>
                        <img  src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Know us
                        </h2>
                        <img src="/images/nav.jpg" alt=""/>
                      </div>
                      <div className='flex  items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                        Know us
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Know us
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex   items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                        Know us
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Know us
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex  items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                        Know us
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Know us
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex   items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                        Know us
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Know us
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                    </div> 
                </div>
                <div ref={el => linkRefs.current[2] = el} className='border-y-[0.02px] relative  border-[#d5d5d5] marquee-container'>
                    <h1 className='text-[9vw] relative leading-[0.8] tracking-tight pt-4 cursor-pointer text-center'>Contact</h1>
                    <div className='absolute top-0 scale-y-105  translate-x-[0%] 
                     bg-[#D3FD50] h-[100%] cursor-pointer  
                     -translate-y-[0%] left-0 flex marquee'>
                        <div className=' flex  items-center gap-4'>
                        <h2 className='whitespace-nowrap '>
                            Sen us a fax
                        </h2>
                        <img  src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Seend us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt=""/>
                      </div>
                      <div className='flex  items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                            Send us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Seend us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex   items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                            Send us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Seend us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex  items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                            Send us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Seend us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex   items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                            Send us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Seend us a fax
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                    </div> 
                </div>
                <div ref={el => linkRefs.current[3] = el} className='border-y-[0.02px] relative  border-[#d5d5d5] marquee-container'>
                    <h1 className='text-[9vw] relative leading-[0.8] tracking-tight pt-4 cursor-pointer text-center'>Blog</h1>
                    <div className='absolute top-0 scale-y-105  translate-x-[0%] 
                     bg-[#D3FD50] h-[100%] cursor-pointer  
                     -translate-y-[0%] left-0 flex marquee'>
                        <div className=' flex  items-center gap-4'>
                        <h2 className='whitespace-nowrap '>
                        Read Articals
                        </h2>
                        <img  src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt=""/>
                      </div>
                      <div className='flex  items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                        Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex   items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                        Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex  items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                        Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                       <div className='flex   items-center gap-2'>
                        <h2 className='whitespace-nowrap '>
                        Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                        <h2 className='whitespace-nowrap'>
                            Read Articals
                        </h2>
                        <img src="/images/nav.jpg" alt="" />
                      </div>
                    </div> 
                </div>
            </div>
           </div>
        </div>
  )
}

export default FullScreenNav