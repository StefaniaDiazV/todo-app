import React, { Component, useEffect, useState } from 'react';
import { AddCategory, AddTask, Categories, Dashboard, Login, Profile, SignUp, Users } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import { Button } from './components/commons/Button';

function App() {

  const [isActive, setIsActive ] = useState(false)

  const  cambiarEstado = () => {
    setIsActive(!isActive)
  }

  // ASI SE UTILIZA NORMALMETE LA ESTRUCTURA DE UN USE EFECT
  useEffect(() => {
  console.log('soy la funcion del use efect ')
  }, [])

  useEffect(cambiarEstado)

  return (
    <>
    <Component/>
    <Component/>
    {isActive && <Component/>}

    <button onClick={cambiarEstado}>Cambhiar estado</button>
    {isActive ? 'is Active es true' : 'is Active es false'}
    </>
  );
}

export default App;
