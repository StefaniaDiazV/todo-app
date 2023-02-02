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


const UserForm = () => {

    // api.get()

    const { register, handleSubmit } = useForm<SignUpForm>()

    const onsubmit = (data: SignUpForm) => {
        userServices.addAxios(data)
    }

    const [name, setname] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [date, setdate] = useState(moment().format('YYYY-MM-DD'))

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        if(id){
            userServices.get(id).then(rta => {
            setname(rta.name)
            setLastName(rta.lastname)
            setemail(rta.email)
            setPassword(rta.password)
            setdate(String(rta.birthdate))
            })
            
        }
    },[id])

    const handleSubmit1 =  async (e:any) => {
        e.preventDefault()
        const birthdate = new Date (date)
        let rta ;

        if(id){
            rta = await userServices.update({id, name, lastname, email, password, birthdate});
        } else {
            rta = await userServices.add({name, lastname, email, password, birthdate})
        }
        console.log(rta)
        if (rta) {
             navigate('/users')
          } 
    }

    return (
   
    <div className='formBox'>
        <div className='userForm'>
            <Form onSubmit={handleSubmit1}>

                <h2>Registrarse</h2>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre"
                    value={name}
                    // onChange={e => setname(e.target.value)}
                    {...register('name')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" 
                    value={lastname}
                    //onChange={e => setLastName(e.target.value)}
                    {...register('lastname')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" 
                    value={email}
                    //onChange={e => setemail(e.target.value)}
                    {...register('email')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contraseña">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" 
                    value={password}
                    //onChange={e => setPassword(e.target.value)}
                    {...register('password')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fechaDeNacimiento">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de nacimiento" 
                    value={date}
                    //onChange={e => setdate(e.target.value)}
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

export { UserForm }