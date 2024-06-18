import plusIcon from '../../../assets/icons/plus.svg';
import './AddTodo.css';

function AddTodo(){
	return (
	<div className="todo"> 
	    <img src={plusIcon} alt="plus icon" />
	    <input type="text" placeholder="Add New Task" name="newTask" />
	</div>
	)
}

export default AddTodo;