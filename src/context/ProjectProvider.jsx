import { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState({sn:'',name:'',date:''});

  const handleChange = (name, date, sn) => {
    setSelectedProject({ name, date, sn });
  };

  return (
    <ProjectContext.Provider value={{ selectedProject, handleChange }}>
      {children}
    </ProjectContext.Provider>
  );
};


export const useProject = () => useContext(ProjectContext);
