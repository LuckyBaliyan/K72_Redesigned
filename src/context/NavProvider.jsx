import React, { createContext, useState } from 'react'

export const NavContext = createContext();

const NavProvider = ({children}) => {
  const [navOpen,setNavOpen] = useState(false);

  return (
    <div>
       <NavContext.Provider value={{navOpen,setNavOpen}}>
            {children}
       </NavContext.Provider>
    </div>
  )
}

export default NavProvider;