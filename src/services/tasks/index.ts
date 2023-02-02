import { AddTaskPayload, Task, User } from "../../types"
import { mapToArray } from "../../helpers/mapToAray";
import { Tab } from "react-bootstrap";
import { api } from "../../utils/axios";


const addAxios = async (task: AddTaskPayload) => {
    const response = await api.post("/tasks.json", task);
    return response.data;
}

const getAllAxios = async () =>{ 
    const response = await api.get("tasks.json");
    return mapToArray<Task>(response.data);
}

const removeAxios = async (id: string) => {
    const response = await api.delete(`tasks/${id}.json`)
   
} 

//________________________________________________________



export const taskServices = {addAxios, getAllAxios, removeAxios }