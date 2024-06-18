
import './App.css';
import Menu from './components/Menu/Menu';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  
  

  return (
    <>
      <div className='main-container'>
         
         <div className='sidebar' >
         
           <Sidebar />
           <Menu />
          
         </div>
         
         <div className='main-content'>
           main
         </div>

      </div>
    </>
  )
}

export default App
