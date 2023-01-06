import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { idText } from 'typescript';
import { categoriesService } from '../../../services';
import { taskServices} from '../../../services/tasks';
import { Category } from '../../../types';
import './style.scss'

const TaskForm = () => {

  const [title, setTitle] = useState('')
  const [dateNum, setDateNum] = useState('')
  const [ idCategory, setIdCategory] = useState('')
  const [ category1, setCategory1] = useState({})
  const [ description, setDescription ] = useState('')
  const [ status, setStatus] = useState('')
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    categoriesService.getAll().then((data) => setCategories(data))
  },[])

  


  const handleSubmit = async (e:any) => {
    e.preventDefault()

    const date = new Date (dateNum)
    const category = await categoriesService.get(idCategory)
    setCategory1(category)
    let a = {id: '', name: ''}
    console.log(idCategory)
    console.log(category1)
    const rta = await taskServices.add({title, date, category, description, status})

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
        value={dateNum}
        onChange={e => setDateNum(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Select onChange={c => setIdCategory(c.target.value) }>
          {categories.map((elem) => {
            return( 
            <option key={elem.id} value={elem.id}>{elem.name}</option>
            )
          })}
          
        </Form.Select>
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