import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTask } from '../../../services/task';
import './style.scss'

const TaskForm = () => {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [ catName, setCatName] = useState('')
  const [ description, setDescription ] = useState('')
  const [ status, setStatus] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault()
    addTask({title, date, catName, description, status})
  }

  return (
    <div className='formBox'>
        <div className='addTaskForm'>
    <Form onSubmit={handleSubmit}>

        <h2>Agregar tarea</h2>

      <Form.Group className="mb-3" controlId="titulo">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="Titulo" 
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="fecha">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" placeholder="Fecha"
        value={date}
        onChange={e => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="text" placeholder="Categoria"
        value={catName}
        onChange={e => setCatName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descripción">
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="text" placeholder="Descripción" 
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="estatus">
        <Form.Label>Estatus</Form.Label>
        <Form.Control type="text" placeholder="Estatus" 
        value={status}
        onChange={e => setStatus(e.target.value)}
        />
      </Form.Group>

      <Button className='add-btn' variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
    </div>    
    </div>
  )  
}

export { TaskForm }