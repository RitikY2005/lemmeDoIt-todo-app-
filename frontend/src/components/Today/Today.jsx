import AddTodo from "../MainPageComponents/AddTodo/AddTodo";
import TodoListTile from "../MainPageComponents/TodoListTile/TodoListTile";

function Today(){
	return (
		<div className="today-wrapper">
            <div className="today-title">
            	<h3>Today</h3>
            	<span>12</span>
            </div>  
             
             <div className="add-todo-container">
             	 <AddTodo /> 
             </div>

             <div className="todo-list-container">
             	<TodoListTile />
             </div>
           
	 </div>
	 )
}

export default Today;