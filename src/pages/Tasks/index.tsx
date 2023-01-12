import { FC, useState } from "react"
import { Layout } from "../../components/layout"
import Card from 'react-bootstrap/Card';
import { Task } from "../../types";
import { taskServices } from "../../services/tasks";
import './style.scss'
import { Button } from  "../../components/commons/Button";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import 'moment/locale/es';

const Tasks: FC = () => {

  moment.locale('es')

  const [tasks, setTasks] = useState<Task[]>([])
  const navigate = useNavigate()
  const getTasks = async () => {
    const rta = await taskServices.getAll()
    setTasks(rta)
  }

  const removeTasks = async (id: string) => {
    await taskServices.remove(id)
    getTasks()
    console.log('one')
  }

  if(!tasks.length) getTasks()

    return (
        <div>
            <Layout>
               
                <div className="container d-flex flex-column">
                  <h1>Tareas</h1>
                <div className="container d-flex flex-wrap">
                {tasks.map((elem) => {
                  return(
                  <Card className="task-cards" key={elem.id} style={{width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{elem.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{elem.category.name}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{elem.status}</Card.Subtitle>
                    <Card.Text>
                      {elem.description}
                      </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                      {moment(String(elem.date)).add(1, 'day').format('LL')}
                      </Card.Subtitle>  
                    <Button variant="primary" handleClick={() => removeTasks(elem.id)} >Eliminar</Button>
                    <Button variant="primary" handleClick={() => navigate(`/add-task/${elem.id}`)}>Editar</ Button>
                  </Card.Body>
                  </Card>
                  )

                })}
                </div>
                </div>
            </Layout>            
        </div>
    )
}

export { Tasks }