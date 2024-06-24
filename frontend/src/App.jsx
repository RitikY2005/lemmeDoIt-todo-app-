
import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Sidebar from './components/Sidebar/Sidebar';
import Today from './components/Today/Today';
import Upcoming from './components/Upcoming/Upcoming';
import StickyWall from './components/StickyWall/StickyWall';



function App() {
  
  const [activeComponent,setActiveComponent]=useState(<Today/>);

  function showActiveComponent(component){
       if(component==='today'){
         setActiveComponent(<Today/>);
       }

       if(component==='upcoming'){
        setActiveComponent(<Upcoming/>);
       }

       if(component==='stickyWall'){
        setActiveComponent(<StickyWall/>)
       }
  }

  return (
    <>
      <div className='main-container'>
         
         <div className='sidebar' >

           <Sidebar showActiveComponent={showActiveComponent} />
           <Menu />
          
         </div>
         
         <div className='main-content'>
           {activeComponent}
           
         </div>

      </div>
    </>
  )
}

export default App
