import React from 'react'

import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import { Inicio } from './containers/App';
import { Login } from './containers/Login';


const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Hello World</div>} />
            {/*<Route path="/login" element={} />*/}
        </Routes>
  </BrowserRouter>
  )
}

export default Rutas