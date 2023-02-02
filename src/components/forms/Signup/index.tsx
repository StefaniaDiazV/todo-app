import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { userServices } from '../../../services/users';
import moment from 'moment';
import './style.scss'
import { api } from '../../../utils/axios';
import { useForm } from 'react-hook-form';
import { User , SignUpForm } from '../../../types';


const SignupForm = () => {
    const { register, handleSubmit } = useForm<SignUpForm>()

    const onsubmit = (data: SignUpForm) => {
        userServices.addAxios(data)
    }

    return (
   
    <div className='formBox'>
        <div className='userForm'>
            <Form onSubmit={handleSubmit(onsubmit)}>

                <h2>Registrarse</h2>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre"
                    {...register('name')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" 
                    {...register('lastname')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" 
                    {...register('email')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contraseña">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" 
                    {...register('password')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fechaDeNacimiento">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de nacimiento" 
                    {...register('birthdate')}
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

export { SignupForm }