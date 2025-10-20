import React from 'react'

const Para = () => {
  return (
    <div className='absolute top-1/2 z-50 w-[20%] right-0 pt-0'>
       <p className='text-left'>
        {Array.from({length:16},(_,i) =>
        <span key={i}>&nbsp;</span>
        )
        }
        K72 is an agency that builds brands from every angle.
        Today, tomorrow and years from now. We think the best sparks fly when comfort 
        zones get left behind and friction infuses our strategies, brands and communications 
        with real feeling. We’re transparent, honest and say what we mean, and when we believe in 
        something, we’re all in.
       </p>
    </div>
  )
}

export default Para