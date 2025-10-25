import React,{useRef} from 'react'
import { useProject } from '../../context/ProjectProvider'


const ProjectsGrid = ({img,img2,name,name2,sn2,sn,date,date2}) => {

 const {handleChange} = useProject();


 const handleMouseEnter = (n, d, s) => {
    handleChange(n, d, s);
  };

  const handleMouseLeave = () => {
      handleChange('Project', '', '');
  };

  return (
          <>
            <div data-scroll-section onMouseEnter={()=>handleMouseEnter(name,date,sn)} onMouseLeave={()=>handleMouseLeave('Project','','')} className='w-1/2 h-full overflow-hidden  rounded-none transition-all duration-150  relative hover:rounded-4xl project-wrap'>
               <div className="flex items-center !bg-black/35 z-20  justify-center absolute top-0 left-0 w-full h-full 
               opacity-0 transition-opacity duration-150 ease-in-out opac">
                  <div className=' border-1 border-white py-1 px-4 rounded-full backdrop-blur-[1px] 
                  flex items-center justify-center transition-all ease-linear
                  duration-150 scale-110 z-10'>
                    <h3 className='text-white whitespace-nowrap leading-[1] text-[3vw]'>View Project</h3>
                  </div>
               </div>
               <img className='w-full h-full object-cover scaleme transition-all ease-out
               duration-450 z-0' src={img} alt="" />
            </div>
            <div onMouseEnter={()=>handleMouseEnter(name2,date2,sn2)}  onMouseLeave={()=>handleMouseLeave('Project','','')} className='w-1/2 h-full overflow-hidden rounded-none transition-all duration-150  relative hover:rounded-4xl project-wrap'>
              <div className="flex items-center  justify-center absolute top-0 left-0 w-full h-full  !bg-black/15 z-20 transition-opacity duration-150 ease-in-out 
                opacity-0 opac">
                 <div className=' border-1 border-white py-1 px-4 rounded-full backdrop-blur-[1px] 
                 flex items-center justify-center transition-all ease-linear
                 duration-150 scale-110 z-10'>
                   <h3 className='text-white whitespace-nowrap leading-[1] text-[3vw]'>View Project</h3>
                 </div>
              </div>
              <img className='w-full h-full object-cover scaleme transition-all ease-out
              duration-450 z-0' src={img2} alt="" />
         </div>
    </>
  )
}

export default ProjectsGrid