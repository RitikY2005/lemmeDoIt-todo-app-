import './Task.css';
import doubleArrow from '../../assets/icons/double-arrow.svg';
import TaskTiles from '../TaskTiles/TaskTiles';
import todayIcon from '../../assets/icons/task.svg';
import stickyWallIcon from '../../assets/icons/sticky-wall.svg';
import { useState } from 'react';

function Task({showActiveComponent}){

  

	return <div className="task"> 
	 <div className="task-title">tasks</div>

	  <TaskTiles title={'upcoming'} icon={doubleArrow} count={'12'} whichComponent={'upcoming'} showActiveComponent={showActiveComponent} />
    
      <TaskTiles title={'today'} icon={todayIcon} count={'3'} showActiveComponent={showActiveComponent} whichComponent={'today'}/>

       <TaskTiles title={'sticky wall'} icon={stickyWallIcon} whichComponent={'stickyWall'} showActiveComponent={showActiveComponent} count={'5'} />


	</div>
}

export default Task;