import './App.css';
import Card from './components/Card';
import Contact from './components/Contact';
import Heading from './components/Heading';
import Social from './components/Social';
import Timeline from './components/Timeline';
import night from './assets/full-moon.png'
import day from './assets/moon.png'
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import ProjectSingle from './components/ProjectSingle';

export const Context = createContext(); 
function App() {
  const [nightMode,setNightMode] = useState(localStorage.getItem('isNight'));   // dark mode on 
  const systemTheme  = window.matchMedia("(prefers-color-scheme:dark)").matches;
 console.log(systemTheme , nightMode)  // night mode true
 const toggleNightMode = () => {
   
    
      setNightMode(!nightMode);
       localStorage.setItem('isNight',`${nightMode}`);
 
  
  };
 
  return (

    <div className="App  font-inter ">
      <div className={nightMode?`bg-[#1C1917] text-[#FFFFFF]`:`bg-[#FFFFFF] text-[#1C1917]`} >
      <div className='flex justify-end  '>
      <img onClick={toggleNightMode} className='cursor-pointer my-10 mx-16 h-10' src={nightMode?day:night} alt="" />
      </div>
      <Context.Provider value={nightMode}>
        <div className='mb-0'>
          
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/projects/:id' element={<ProjectSingle/>}/>
    
    </Routes>
    <Social />

        </div>
     </Context.Provider>
      </div>
     
    </div>
  )
}

export default App;
