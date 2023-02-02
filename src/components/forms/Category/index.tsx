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

    return (
        <div className='formBox'>
            <div className='addCategoryForm'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Agregar categoria</h2>
                    <Form.Group className="mb-3" controlId="nombre de categoria">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" 
                        {...register("name")}
                        />
                         <Form.Label>Elige un color</Form.Label>
                        <Form.Control type="color"
                        {...register("color")}
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