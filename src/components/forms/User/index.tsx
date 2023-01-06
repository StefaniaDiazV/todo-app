import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { userServices } from '../../../services/users';
import './style.scss'

const UserForm = () => {

    const defaultValue = {
        name: '' ,
        lastname: '',
        email: '',
        password: '',
        birthdate : '' ,
    }

    const [name, setname] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [date, setdate] = useState('')

    //const [userData, setUserData] = useState (defaultValue)
    const [ifError, setIfError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit =  async (e:any) => {
        e.preventDefault()

      const birthdate = new Date (date)
      

        let rta ;

        rta = await userServices.add({name, lastname, email, password, birthdate})

        if (rta) {
            
            navigate('/users')
          } else {
            setIfError(true);
          }
    }


    return (
   
    <div className='formBox'>
        <div className='userForm'>
            <Form onSubmit={handleSubmit}>

                <h2>Registrarse</h2>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre"
                    value={name}
                    onChange={e => setname(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" 
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" 
                    value={email}
                    onChange={e => setemail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contraseña">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fechaDeNacimiento">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de nacimiento" 
                    value={date}
                    onChange={e => setdate(e.target.value)}
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