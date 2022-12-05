import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss'

const LoginForm = () => {
  return (
    <div className='formBox'>
        <div className='loginForm'>
    <Form>

        <h2>Login</h2>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contraseña">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <Button className='add-btn' variant="primary" type="button">
       Ingresar
      </Button>
    </Form>
    </div>    
    </div>
  )  
}

export { LoginForm }