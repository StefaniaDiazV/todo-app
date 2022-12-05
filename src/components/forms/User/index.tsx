import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addUser } from '../../../services/users';
import './style.scss'

const UserForm = () => {

    const defaultValue = {
        name: '' ,
        lastname: '',
        email: '',
        password: '',
        birthdate: ''
    }

    const [userData, setUserData] = useState(defaultValue)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        addUser({...userData})
    }


    return (
   
    <div className='formBox'>
        <div className='userForm'>
            <Form onSubmit={handleSubmit}>

                <h2>Registrarse</h2>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre"
                    value={userData.name}
                    onChange={e => setUserData({...userData, name: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" 
                    value={userData.lastname}
                    onChange={e => setUserData({...userData, lastname: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" 
                    value={userData.email}
                    onChange={e => setUserData({...userData, email: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contraseña">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" 
                    value={userData.password}
                    onChange={e => setUserData({...userData, password: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fechaDeNacimiento">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de nacimiento" 
                    value={userData.birthdate}
                    onChange={e => setUserData({...userData, birthdate: e.target.value})}
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

export { UserForm }