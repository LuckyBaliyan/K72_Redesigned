import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agents from './pages/Agents';
import Transition from './components/comman/Transition';
import Navbar from './components/comman/Navbar';
import FullScreenNav from './components/comman/FullScreenNav';


const App = () => {  
  return (
    <div>
      <Navbar/>
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/agents" element={<Agents/>} />
      </Routes>
    </div>
  )
}

export default App;