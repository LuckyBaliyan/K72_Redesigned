import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Global.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Transition from './components/comman/Transition'
import NavProvider from './context/NavProvider'
import { ProjectProvider } from './context/ProjectProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Transition>
        <NavProvider>
           <ProjectProvider>
             <App/>
           </ProjectProvider>
        </NavProvider>
     </Transition>
    </BrowserRouter>
  </StrictMode>
)
