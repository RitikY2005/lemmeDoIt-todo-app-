import './TaskTiles.css';

function TaskTiles({icon,title,count,showActiveComponent,whichComponent}){
    


	return (
	<div className="upcoming task-tiles" onClick={()=>showActiveComponent(whichComponent)} >
	 	<img src={icon} alt={title} className='task-icon'/>
        <p className='task-title'>{title}</p>
        <span className='task-count'>{count}</span>
	 </div>
	 )
}

export default TaskTiles;