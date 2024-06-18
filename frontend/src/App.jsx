
import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Sidebar from './components/Sidebar/Sidebar';
import Today from './components/Today/Today';


function App() {
  
  const [activeComponent,setActiveComponent]=useState(null);

  function showActiveComponent(component){
       if(component==='today'){
         setActiveComponent(<Today/>);
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
