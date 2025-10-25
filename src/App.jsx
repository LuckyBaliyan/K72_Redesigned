import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agents from './pages/Agents';
import Navbar from './components/comman/Navbar';
import FullScreenNav from './components/comman/FullScreenNav';
import LocomotiveScroll from 'locomotive-scroll';
import { useRef } from 'react';
import ContactUs from './pages/ContactUs';
import { useLocomotiveScroll } from './hooks/Locomotive';



const App = () => {  

 const scroll = new LocomotiveScroll();
  
  return (
    <div data-scroll-container>
      <Navbar/>
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/agents" element={<Agents/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default App;