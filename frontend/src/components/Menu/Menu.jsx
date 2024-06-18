import menuIcon from '../../assets/icons/menu.svg';
import './Menu.css';

function Menu(){

   function toggleSidebar(){
   	  
   	document.querySelector('.sidebar-wrapper').classList.toggle('toggle-sidebar');
   	document.querySelector('.sidebar').classList.toggle('shrink-sidebar');
   }

	return <img src={menuIcon} alt="menu bar icon" id='menu-bar' onClick={()=>toggleSidebar()} />
}

export default Menu;