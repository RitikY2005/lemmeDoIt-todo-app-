import rightArrowIcon from '../../../assets/icons/right-arrow.svg';
import './TodoListTile.css';

function TodoListTile({todoTitle='not provided'}){
	return(
	 <div className="todo-list-tile"> 
       <div className="w-todo-list-tile">
       	 <input type="checkbox" name="todoCheckbox"/>
        <p className="todo-list-title">{todoTitle}</p>
       </div>
        <img src={rightArrowIcon} alt="arrowicon"/>
	</div>
	)
}

export default TodoListTile;