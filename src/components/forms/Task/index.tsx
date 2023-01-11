import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { categoriesService } from '../../../services';
import { taskServices} from '../../../services/tasks';
import { Category } from '../../../types';
import './style.scss'

const TaskForm = () => {

  const [title, setTitle] = useState('')
  const [dateNum, setDateNum] = useState('')
  const [ idCategory, setIdCategory] = useState('')
  const [ description, setDescription ] = useState('')
  const [ status, setStatus] = useState('')

  const [categories, setCategories] = useState<Category[]>([])


  useEffect(() => {
    categoriesService.getAll().then((data) => setCategories(data))
  },[])

  const navigate = useNavigate()
  const {id} = useParams()

    useEffect(() => {
      if (id)  {
        taskServices.get(id).then(rta => {
          setTitle(rta.title)
          setDescription(rta.description)
          setStatus(rta.status)
          setDateNum(String(rta.date))
          setIdCategory(rta.category.id)
        })
      } 
    },[id])

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const date = new Date (dateNum)
    const category = categories.find((elem) => elem.id === idCategory)
    let rta
    if(category){
      if(id){
        rta = await taskServices.update({id, title, date, category, description, status});
      }else{
        rta = await taskServices.add({title, date, category, description, status})
    } 
    }
     if (rta) {
      navigate('/tasks')
    } 
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
        <Form.Select onChange={e => setIdCategory(e.target.value) }>
          <option selected disabled>Seleccionar una opción</option>
          {categories.map((elem) => ( 
            <option key={elem.id} value={elem.id} selected={elem.id === idCategory}>{elem.name}</option>
          ))}
          
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