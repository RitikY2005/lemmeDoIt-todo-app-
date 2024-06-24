
import plusIcon from '../../../assets/icons/plus.svg';


function AddTodo({toggleTodoInfo}){

	return (
		<div> 
	 <img src={plusIcon} alt="plus sign" />
     <button onClick={()=>toggleTodoInfo()}>Add to do</button>
	</div>
	)
}

export default AddTodo;