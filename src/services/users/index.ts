import { SignUpForm, User } from "../../types"
import { DB_BASE_URL } from "../../constants"
import { mapToArray } from "../../helpers/mapToAray";
import { api } from "../../utils/axios";


const addAxios = async (user: SignUpForm) => {
    const response = await api.post('/users.json',user)
    return response.data
}

const getAxios = async () => {
    const response = await api.get('/users.json')
    return response.data
}
 
const getAll = async (): Promise<User[]> => {
    const response = await fetch (`${DB_BASE_URL}/users.json`);
    const data = await response.json()
    return mapToArray<User>(data);
}

type payload = Omit<User, 'id'>

const add = async (user : payload) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(user)
    }
    const response = await fetch(`${DB_BASE_URL}/users.json`, options)
    const data = await response.json()
    if(data.name) {
    return true
    } else {
    return false
    }
}

const get = async (id:string): Promise<User> => {
    const response = await fetch(`${DB_BASE_URL}/users/${id}.json`)
    const data = await response.json()
    return{ id, ...data}
}

const update = async ({id, name, lastname, email, password, birthdate}: User) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify({name, lastname, email, password, birthdate })
    }
    const response = await fetch(`${DB_BASE_URL}/users/${id}.json`, options)
    const data = await response.json()
    if(data) {
        return true
        } else {
        return false
        }
}

const remove = async (id: string) => {
    const options = {
        method: 'DELETE',
    };
    await fetch(`${DB_BASE_URL}/users/${id}.json`, options)
} 

export  const userServices =  { getAll, get, update, remove, add, addAxios }