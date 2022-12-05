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
      { page === "Login" && <Login onChangePage={changePage} /> }
      { page === "SignUp" && <SignUp onChangePage={changePage} /> }
      { page === "Dashboard" && <Dashboard onChangePage={changePage} /> }
      { page === "Task" && <Task onChangePage={changePage} /> }
      { page === "Categories" && <Categories onChangePage={changePage} /> }
      { page === "AddTask" && <AddTask onChangePage={changePage} /> }
      { page === "AddCategory" && <AddCategory onChangePage={changePage} /> }
      { page === "Profile" && <Profile onChangePage={changePage} /> }
    </div>
  );
}

export default App;
