import { Task } from "../../types"

const getTasks = () => {

}

export const addTask = (payload: any ) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(payload)
    }
    fetch("https://todoapp-3798f-default-rtdb.firebaseio.com/tasks.json", options)
}

const getTask = (id:string) => {

}

const updateTask = (id:string, payload: Task) => {

}

const removeTask = (id: string) => {
    
} 