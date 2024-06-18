
import './Sidebar.css';

function Sidebar(){
	return (
		
          <div className='sidebar-wrapper'>
               <div className="content" id='sidebar' >

                    <div className='sidebar-title'>
                       <h1>LemmeDOIt</h1>
                       
                    </div>

                    <div className="searchbar-wrapper">
                       search
                    </div>

                    <div className="tasks-wrapper">
                      task
                    </div>

                    <div className='category'>
                      type
                    </div>

                     
               </div>
         </div>
	

		)
}

export default Sidebar;