import React from 'react';
import Home from '../pages/Home';
import SiswaIndex from '../pages/siswa/Index';
import SiswaCreate from '../pages/siswa/Create';
import SiswaEdit from '../pages/siswa/Edit';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import { Route } from "react-router-dom";


const ContainerRoutes = () => {
  return (
    <div className="container">
      <Route path='/' exact component={ Home } />
      <Route path='/siswa' exact component={ SiswaIndex } />
      <Route path='/login' exact component={ Login } />
      <Route path='/logout' exact component={ Logout } />
      <Route path='/siswa/create' exact component={ SiswaCreate } />
      <Route path='/siswa/edit/:id' exact component={ SiswaEdit } />
    </div>
  )
}

export default ContainerRoutes
