import { Task, User } from "../../types"
import { DB_BASE_URL } from "../../constants"
import { mapToArray } from "../../helpers/mapToAray";
import { Tab } from "react-bootstrap";

const getAll = async (): Promise<Task[]> => {
    const response = await fetch (`${DB_BASE_URL}/tasks.json`);
    const data = await response.json()
    return mapToArray<Task>(data);
}

type payload = Omit<Task, 'id'>

const add = async (task: payload) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(task)
    }
    const response = await fetch(`${DB_BASE_URL}/tasks.json`, options)
    const data = await response.json()
    if(data.name) {
        return true
        } else {
        return false
        }
}


const get = async (id:string): Promise<Task> => {
    const response = await fetch(`${DB_BASE_URL}/tasks/${id}.json`)
    const data = await response.json()
    return{ id, ...data}
}

const update = async ({id, title, description, date, category}:Task) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify({title, description, date, category})
    }
    const response = await fetch(`${DB_BASE_URL}/tasks/${id}.json`, options)
}

const remove = async (id: string) => {
    const options = {
        method: 'DELETE',
    };
    await fetch(`${DB_BASE_URL}/tasks/${id}.json`, options) 
} 

export const taskServices = { getAll, get, add, update, remove}