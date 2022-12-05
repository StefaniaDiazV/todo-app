import React, { useState } from 'react';
import { AddCategory, AddTask, Categories, Dashboard, Login, Profile, SignUp, Task } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [page, setPage] = useState('Login')

  const changePage = (value:string) => {
    setPage(value)
  }

  return (
    <div className="App">
      { page === "Login" && <Login /> }
      { page === "SignUp" && <SignUp  /> }
      { page === "Dashboard" && <Dashboard /> }
      { page === "Task" && <Task  /> }
      { page === "Categories" && <Categories  /> }
      { page === "AddTask" && <AddTask  /> }
      { page === "AddCategory" && <AddCategory  /> }
      { page === "Profile" && <Profile/> }
    </div>
  );
}

export default App;
