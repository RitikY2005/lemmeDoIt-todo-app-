import { useState } from "react";
import AddTodo from "../MainPageComponents/AddTodo/AddTodo";
import TodoInfo from "../MainPageComponents/TodoInfo/TodoInfo";
import TodoListTile from "../MainPageComponents/TodoListTile/TodoListTile";
import './Today.css';

function Today(){

    const [isTodoInfoVisible,setIsTodoInfoVisible]= useState(false);AddTodo

    function toggleTodoInfo(){
        setIsTodoInfoVisible(!isTodoInfoVisible);
    }

	return (<>
		<div className="today-wrapper">
            <div className="today-title">
            	<h3>Today</h3>
            	<span>12</span>
            </div>  
             
             <div className="add-todo-container">
             	 <AddTodo toggleTodoInfo={toggleTodoInfo}/>  
             </div>

             <div className="todo-list-container">
             	<TodoListTile />
             </div>


           
	 </div>

      {isTodoInfoVisible && (<TodoInfo toggleTodoInfo={toggleTodoInfo}/>)}   
	 </>)
}

export default Today;