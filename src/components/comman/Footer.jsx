import React from 'react'
import Clock from './Clock'

const Footer = () => {
  return (
    <div className='bg-black h-[60vh] px-2 pt-4 pb-5 flex flex-col justify-between'>
        <div className='flex justify-between'>
            <div>
                {
                    ["FB","IG","IN","BE"].map((w,i)=>(
                        <li className='text-white inline-block pt-3 ml-2 border-2 rounded-full 
                         px-6 leading-[0.8] transition hover:text-[#D3FD50] hover:border-[#D3FD50] 
                         text-[5vw] font-[Lusane2] font-extrabold cursor-pointer
                        ' key={i}>{w}</li>
                    ))
                }
            </div>
            <div>
                <button className='border-2 text-white font-[Lusane2] font-extrabold text-[5vw] rounded-full 
                px-5 leading-[0.8] pt-3  transition cursor-pointer hover:text-[#D3FD50] hover:border-[#D3FD50]'>
                    CONTACT
                </button>
            </div>
        </div>
        <div className='flex justify-between items-center'>
           <Clock />
           <div>
            {
            ["Privacy Policy",
             "Privacy Notice",
             "Ethics Report",
             "Consent Choices"
            ].map((w,i)=>(
                <li key={i} className='inline-block ml-8 uppercase'>{w}</li>
            ))
            }
           </div>
           <div>
            <p className='uppercase'>
                <a href="https://github.com/LuckyBaliyan
                " target='_blank'>
                   My Git Hub 
                </a>
            </p>
           </div>
        </div>
    </div>
  )
}

export default Footer