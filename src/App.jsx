import { Outlet } from 'react-router-dom';
import './App.css' 
import NavBar from './components/NavBar.jsx';

function App() {
  return (
      <div className='App'> 
        <NavBar />
        <h2>Movie Library API Tests</h2>
        <Outlet />
      </div>
  );
}

export default App
