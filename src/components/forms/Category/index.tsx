import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { categoriesService } from '../../../services';
import './style.scss'

const CategoryForm = () => {

    const [catName, setCatName ] = useState('')

    const handleSubmit = (e:any) => {
        e.preventDefault()
        categoriesService.add({name: catName})
    }


    const [name, setName] = useState('')
    const [ifError, setIfError] = useState(false)

    const navigate = useNavigate()
    const  { id} = useParams()

    const obtenerCategoria = async () => {
      if (id)  {
        const rta = await categoriesService.get(id)
        setName(rta.name)
    }
}

    if(id && name === '') obtenerCategoria()

    const enviarFormulario = async (e: any) => {
        e.preventDefault()
        setIfError(false)

        let rta;
        if(id){
            rta = await categoriesService.update({id, name});
        } else {
            rta = await categoriesService.add({ name });
        }

       
        if (rta) {
            setName("");
            navigate('/categories')
          } else {
            setIfError(true);
          }
    }

    return (
        <div className='formBox'>
            <div className='addCategoryForm'>
                <Form onSubmit={enviarFormulario}>
                <h2>Agregar categoria</h2>
                    <Form.Group className="mb-3" controlId="nombre de categoria">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" 
                         value={name} 
                         onChange={e =>  setName(e.target.value)}
                        />
                    </Form.Group>
                    <Button className='add-btn' variant="primary" type="submit">
                        Agregar
                    </Button>
                    {ifError && <p style={{ color: "red" }}>Hubo un error</p>}
                </Form>
                
            </div>
        </div>
    )
}

export { CategoryForm }