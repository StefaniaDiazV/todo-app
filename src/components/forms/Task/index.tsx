import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { categoriesService } from "../../../services";
import { AddTaskForm, Category } from "../../../types";
import moment from "moment";
import "./style.scss";
import { useTasks } from "../../../hooks";
import { useForm } from "react-hook-form";

const TaskForm = () => {
  const { addTasks } = useTasks();
  const [categories, setCategories] = useState<Category[]>([]);
  const { register, handleSubmit } = useForm<AddTaskForm>();

  useEffect(() => {
    categoriesService.getAllAxios().then((data) => setCategories(data));
  }, []);

  const onSubmit = (data: AddTaskForm) => {
    addTasks({
      ...data,
      date: new Date(data.date),
      category: categories.find((cat) => cat.id === data.category) as Category,
    });
  };

  return (
    <div className="formBox">
      <div className="addTaskForm">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Agregar tarea</h2>

          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titulo"
              {...register("title")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="fecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha"
              {...register("date")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="categoria">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
            {...register("category")} 
            >
              <option selected disabled>
                Seleccionar una opción
              </option>
              {categories.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {elem.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="descripción">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="Descripción"
              {...register("description")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="estatus">
            <Form.Label>Estatus</Form.Label>
            <Form.Select
            {...register("status")}
            >
              <option selected disabled>
                Seleccionar una opción
              </option>
              <option>Sin iniciar</option>
              <option>En progreso</option>
              <option>Completada</option>
              <option>Pospuesta</option>
              <option>Cancelada</option>
            </Form.Select>
          </Form.Group>

          <Button className="add-btn" variant="primary" type="submit">
            Agregar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export { TaskForm };
