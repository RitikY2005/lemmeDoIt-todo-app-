
import { useEffect,  useState } from 'react';
import rightArrowIcon from '../../../assets/icons/right-arrow.svg';
import './TodoListTile.css';
import axios from 'axios';
import Loading from '../../Loading/Loding.jsx';


function TodoListTile(){


  



   




	return(<>
    
     
 <div className="todo-list-tile" > 
       <div className="w-todo-list-tile">
       	 <input type="checkbox" name="todoCheckbox" />
        <p className="todo-list-title">title</p>
       </div>
        <img src={rightArrowIcon} alt="arrowicon"/>
	</div>

   
	
	</>)
}

export default TodoListTile;