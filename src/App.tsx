import React, { useState } from 'react';
import { AddCategory, AddTask, Categories, Dashboard, Login, Profile, SignUp, Tasks, Users } from './pages';
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

          <Route path='tasks' element={ <Tasks />}/>
          <Route path='categories' element={ <Categories />}/>
          <Route path='add-task' element={ <AddTask/>}/>
          <Route path='add-category' element={ <AddCategory />}/>
          <Route path='add-category/:id' element={ <AddCategory />}/>
          <Route path='profile' element={ <Profile/>}/>
          <Route path='users' element={ <Users/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
