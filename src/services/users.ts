import { User } from "../types"

const getUsers = () => {

}

export const addUser= (payload: any) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(payload)
    }
    fetch("https://todoapp-3798f-default-rtdb.firebaseio.com/users.json", options)
}

const getUser = (id:string) => {

}

const updateUser = (id:string, payload: User) => {

}

const removeUser= (id: string) => {
    
} 