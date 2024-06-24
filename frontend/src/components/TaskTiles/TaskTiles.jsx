import { useEffect, useRef, useState } from 'react';
import './TaskTiles.css';

function TaskTiles({icon,title,showActiveComponent,whichComponent}){
    const [isActive , setIsActive]= useState(false);
    const taskTileRef=useRef(null);
   
   function handleDivClick(event){
   setIsActive(true);
   showActiveComponent(whichComponent);
   }

   function handleOutsideClick(event){

      if(taskTileRef.current && !taskTileRef.current.contains(event.target)){
      	setIsActive(false);
      }
   }

  useEffect(()=>{
     document.addEventListener('mousedown',handleOutsideClick);

     return ()=>{
     	document.removeEventListener('mousedown',handleOutsideClick);
     }
  },[])

	return (
	<div className="upcoming task-tiles" ref={taskTileRef} onClick={handleDivClick} style={{backgroundColor:isActive?'#c3bebe89':''}} >
	 	<img src={icon} alt={title} className='task-icon'/>
        <p className='task-title'>{title}</p>
     
	 </div>
	 )
}

export default TaskTiles;