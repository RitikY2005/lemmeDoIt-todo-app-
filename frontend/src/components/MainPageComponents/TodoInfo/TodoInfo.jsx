import './TodoInfo.css';
import plusIcon from '../../../assets/icons/plus.svg';
import axios from 'axios';

function TodoInfo({toggleTodoInfo}){


   function handleSubmit(event){

   	event.preventDefault();
   
    // if the title field is empty , don't save it

    if(!event.target.title.value) return ;
    
    const formattedDate= new Date(event.target.dueDate.value).toISOString();

    const info= {
    	title:event.target.title.value,
    	completed:event.target.completed.checked,
    	dueDate:formattedDate
    }

    saveTodo(info); 


    console.log('info to be saved--',info);
    toggleTodoInfo();
   }


   async function saveTodo(info){
   	   const req_url="http://localhost:5000/api/todos";

   	   try{
              const response= await axios.post(req_url,info);
   	   }

   	   catch(err){
   	   	 console.log('err in saveTodo',err);
   	   }
   } 


	return (
      <div className="todo-info-wrapper" >
      <div className='todo-info'>

      	<div className="close-todo-info"  >
      		<img src={plusIcon} alt="close" onClick={()=>toggleTodoInfo()} />
      	</div>

<form onSubmit={handleSubmit} >

        <div className='todo-title' >
        	<input type="text" placeholder='Buy a new Rolls Royce' name='title' />
        </div>


        <div className='todo-completed' >
            <input type="checkbox" name='completed' id='todo-completed'/>
        	<label htmlFor="todo-completed">This task is completed</label>

        </div>

        <div className="todo-dueDate">
            <span>DueDate</span>
        	<input type="date" name="dueDate" id="todo-dueDate" />
        </div>

        <div className='todo-save'>
        	<button type="submit">Save</button>
        </div>
   </form>

      </div>
      </div> 
		)
}



export default TodoInfo;