import './Task.css';
import doubleArrow from '../../assets/icons/double-arrow.svg';
import TaskTiles from '../TaskTiles/TaskTiles';
import todayIcon from '../../assets/icons/task.svg';
import stickyWallIcon from '../../assets/icons/sticky-wall.svg';

function Task(){
	return <div className="task"> 
	 <div className="task-title">tasks</div>

	 <TaskTiles title={'upcoming'} icon={doubleArrow} count={'12'} />
    
      <TaskTiles title={'today'} icon={todayIcon} count={'3'} />

       <TaskTiles title={'sticky wall'} icon={stickyWallIcon} count={'5'} />


	</div>
}

export default Task;