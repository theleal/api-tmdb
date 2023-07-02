import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App.jsx'
import Home from './pages/Home';

import Search from './pages/Search'
import Films from './pages/Films.jsx';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}> 
          <Route path='/' Component={<Home />}/>
          <Route path='movie/:id' Component={<Films />}/>
          <Route path='/search' Component={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
