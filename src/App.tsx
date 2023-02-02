import React, { useState } from 'react';
import { AddCategory, AddTask, Categories, Dashboard, Login, Profile, SignUp, Users } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes }  from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={ <Dashboard />}/>
          <Route path='dashboard' element={ <Dashboard />}/>
          <Route path='login' element={ <Login />}/>
          <Route path='sign-up' element={ <SignUp/>}/>
          <Route path='sign-up/:id' element={ <SignUp/>}/>

          <Route path='categories/'>
            <Route index element={ <Categories />}/>
            <Route path='add-category' element={ <AddCategory />}/>
            <Route path='add-category/:id' element={ <AddCategory />}/>
          </Route>

          <Route path='users/'>
            <Route index element={ <Users/>}/>
          </Route>
         
          <Route path='add-task' element={ <AddTask/>}/>
          <Route path='add-task/:id' element={ <AddTask/>}/>
          <Route path='profile' element={ <Profile/>}/>

        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
