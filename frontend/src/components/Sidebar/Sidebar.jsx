import searchIcon from '../../assets/icons/search.svg';
import Task from '../Task/Task';
import './Sidebar.css';

function Sidebar(){
	return (
		
          <div className='sidebar-wrapper'>
               <div className="content" id='sidebar' >

                    <div className='sidebar-title'>
                       <h1>LemmeDOIt</h1>
                       
                    </div>

                    <div className="searchbar-wrapper">
                       <div className="searchbar">
                       	 <img src={searchIcon} alt="search icon"  />
                       	 <input type="text" placeholder='search..' name='searchText'  />
                       </div>
                    </div>

                    <div className="tasks-wrapper">
                      <Task />
                    </div>

                    <div className='category'>
                      type
                    </div>

                     
               </div>
         </div>
	

		)
}

export default Sidebar;