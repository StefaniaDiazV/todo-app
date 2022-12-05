import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../../../services/categories';
import './style.scss'

const CategoryForm = () => {

    const [catName, setCatName ] = useState('')

    const handleSubmit = (e:any) => {
        e.preventDefault()
        addCategory({name: catName})
        setCatName('')
    }

    return (
        <div className='formBox'>
            <div className='addCategoryForm'>
                <Form onSubmit={handleSubmit}>
                <h2>Agregar categoria</h2>

                    <Form.Group className="mb-3" controlId="nombre de categoria">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" 
                         value={catName} 
                         onChange={e =>  setCatName(e.target.value)}
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

export { CategoryForm }