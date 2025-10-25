import React,{useRef} from 'react'
import ProjectsGrid from '../components/prpjects/ProjectsGrid'
import { useProject } from '../context/ProjectProvider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Footer from '../components/comman/Footer';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const {selectedProject} = useProject();
  const cardRefs =  useRef([]);
  const gridRef = useRef(null);
 
  const projects = [
  {
    id: 'p1',
    name1: 'Celestine Mirage',
    serial1: '001',
    date1: 'Jan 12, 2025',
    name2: 'Aetherial Bloom',
    serial2: '002',
    date2: 'Jan 18, 2025',
    img: '/images/p2.jpg',
    img2: '/images/p1.jpg',
  },
  {
    id: 'p2',
    name1: 'Obsidian Veil',
    serial1: '003',
    date1: 'Feb 02, 2025',
    name2: 'Nocturne Prism',
    serial2: '004',
    date2: 'Feb 10, 2025',
    img: '/images/p3.jpg',
    img2: '/images/p4.jpg',
  },
  {
    id: 'p3',
    name1: 'Lunaris Echo',
    serial1: '005',
    date1: 'Mar 05, 2025',
    name2: 'Solstice Drift',
    serial2: '006',
    date2: 'Mar 12, 2025',
    img: '/images/p5.jpg',
    img2: '/images/p6.jpg',
  },
  {
    id: 'p4',
    name1: 'Eclipsera Void',
    serial1: '007',
    date1: 'Apr 01, 2025',
    name2: 'Velaris Haze',
    serial2: '008',
    date2: 'Apr 09, 2025',
    img: '/images/p7.jpg',
    img2: '/images/p8.jpg',
  },
  {
    id: 'p5',
    name1: 'Arcyn Shade',
    serial1: '009',
    date1: 'May 11, 2025',
    name2: 'Sylphic Tide',
    serial2: '010',
    date2: 'May 17, 2025',
    img: '/images/p9.jpg',
    img2: '/images/p10.jpg',
  },
  {
    id: 'p6',
    name1: 'Seraphel Dawn',
    serial1: '011',
    date1: 'Jun 03, 2025',
    name2: 'Mireith Pulse',
    serial2: '012',
    date2: 'Jun 10, 2025',
    img: '/images/p11.jpg',
    img2: '/images/p12.jpg',
  },
  {
    id: 'p7',
    name1: 'Klyra Ember',
    serial1: '013',
    date1: 'Jul 08, 2025',
    name2: 'Thalren Mist',
    serial2: '014',
    date2: 'Jul 14, 2025',
    img: '/images/nav.jpg',
    img2: '/images/nav.jpg',
  },
  {
    id: 'p8',
    name1: 'Eirwen Frost',
    serial1: '015',
    date1: 'Aug 22, 2025',
    name2: 'Dravyn Crest',
    serial2: '016',
    date2: 'Aug 29, 2025',
    img: '/images/nav.jpg',
    img2: '/images/nav.jpg',
  },
];

useGSAP(() => {
  gsap.from(cardRefs.current,{
    height:'130px',
    stagger:{amount:0.8},
    scrollTrigger:{
      trigger:gridRef.current,
      start: "top 40%", 
      end: "top -580%",
      scrub:true,
    }
  })
}, []);



  return (
    <div className='bg-white min-h-screen'>
      <div className='!text-black pt-[40vh] p-2'>
       <div className='flex'>
         <h2 className='text-[10vw] uppercase !text-black'>
          Works
        </h2>
        <span className='text-[3vw] font-extrabold self-start font-[Lusane2] mt-2'>16</span>
       </div>
       </div>
        <div className='-mt-15 relative'>
        <div className={`sticky dets w-full  bg-white flex items-center justify-between !text-black border 
        border-r-0 border-l-0 transition-all duration-500 border-[#1e1e1e] z-40 top-0 left-0 px-4 py-2 ${selectedProject.sn === ''?'-translate-y-[900%] opacity-0':'-translate-y-[0%] opacity-100'}`}>
         <p className='text-[2vw] font-[Lusane2] relative'>{selectedProject.sn}
         </p>
         <h5 className='!text-black text-[2vw] font-[Lusane2]'>{selectedProject.name}</h5>
         <p className='text-[2vw] font-[Lusane2]'>{selectedProject.date}</p>
        </div>
         <div  className='px-2 pb-2 bg-white' ref={gridRef}>
            {
            projects.slice(0,6).map((i,indx)=>(
              <div  key={i.id} ref={(el) => cardRefs.current[indx] = el} className='w-full mb-2 flex h-[800px]  gap-2 cursor-pointer '>
              <ProjectsGrid name={i.name1} name2={i.name2} sn2={i.serial2} date2={i.date2} 
              date={i.date1} sn={i.serial1} img={i.img} img2={i.img2} />
              </div>
            ))
            }
            </div>
         </div>
         <div>
          <Footer />
         </div>
    </div>
  )
}

export default Projects