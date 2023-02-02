import { useContext, useEffect } from "react"
import { StoreContext } from "../../context"
import { taskServices } from "../../services/tasks";
import { AddTaskPayload } from "../../types";

const useTasks = () => {
    const { tasks, loadTasks } = useContext(StoreContext);

    useEffect(() => {
        !tasks.length && getTaks()
    }, [tasks])

    const getTaks = async () => {
        const response = await taskServices.getAllAxios();
        loadTasks(response)
    }

    const removeTasks = async (id: string) => {
        await taskServices.removeAxios(id)
        getTaks()
    }

    const addTasks = async (data: AddTaskPayload) => {
        await taskServices.addAxios(data)
        getTaks()
    }

    return { tasks, addTasks, removeTasks}
}

export { useTasks }