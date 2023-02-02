import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { categoriesService } from '../../../services';
import { AddCategoryForm } from '../../../types';
import './style.scss'

const CategoryForm = () => {

    const {register, handleSubmit} = useForm<AddCategoryForm>()

    const onSubmit = (data: AddCategoryForm) => {
        categoriesService.addAxios(data)
    }

    const [name, setName] = useState('')
    const [color, setColor] = useState("#ffffff")
    const [ifError, setIfError] = useState(false)

    const navigate = useNavigate()
    const  { id} = useParams()

    useEffect(() => {
        if (id) {
            categoriesService.get(id).then((rta) => {
                setName(rta.name)
                setColor(rta.color)
            })}
     }, [id])

    const handelSubmit = async (e: any) => {
        e.preventDefault()
        setIfError(false)

        let rta;
        if(id){
            rta = await categoriesService.update({id, name, color});
        } else {
            rta = await categoriesService.add({ name , color });
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
                <Form onSubmit={handelSubmit}>
                <h2>Agregar categoria</h2>
                    <Form.Group className="mb-3" controlId="nombre de categoria">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" 
                         value={name} 
                         onChange={e =>  setName(e.target.value)}
                        />
                         <Form.Label>Elige un color</Form.Label>
                        <Form.Control type="color"
                        value={color}
                        onChange={e => setColor(e.target.value)}
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