import { SignUpForm, User } from "../../types"
import { mapToArray } from "../../helpers/mapToAray";
import { api } from "../../utils/axios";


const addAxios = async (user: SignUpForm) => {
    const response = await api.post('/users.json',user)
    return response.data
}

const getAllAxios = async () => {
    const response = await api.get('/users.json')
    return response.data
}



// _________________________________________________________________________
 

export  const userServices =  { addAxios, getAllAxios }