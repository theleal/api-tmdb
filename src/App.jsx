import { useState } from 'react'
import './App.css' 
import { Link, Outlet } from 'react-router-dom';


function App() {

  return (
    <>
      <div className='App'> 
      <nav className='navbar'>
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
        <Link to="/movie/1">Movies</Link>
        <Link to="/search">search</Link>
      </nav>
        <h1>Movie Library API Tests</h1>
        {/* <Outlet /> */}
      </div>
    </>
  );
}

export default App
