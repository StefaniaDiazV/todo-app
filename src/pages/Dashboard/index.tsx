import { FC, useState } from "react";
import { Layout } from "../../components/layout";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../hooks";
import { Col, Container, Row } from "react-bootstrap";
import { Task as TaskCard } from "../../components/commons";


const Dashboard: FC = () => {
  const { tasks, removeTasks } = useTasks();

  return (
    <div>
      <Layout>
        <h1>Tareas</h1>
        <Container fluid className="p-4">
          <Row>
            {tasks.map((task) => (
              <Col key={task.id} sm={6} md={4} lg={3} className="mb-4">
                <TaskCard {...task} onDelete={removeTasks} />
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

{
  /* <Card className="task-cards" key={elem.id} >
                    <Card.Body >
                    <Card.Title>{elem.title}</Card.Title>
                    <Card.Subtitle className="mb-2 " style={{color:elem.category.color}} >{elem.category.name}</Card.Subtitle>
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
                  </Card> */
}

export { Dashboard };
