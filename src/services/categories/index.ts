import { AddCategoryForm, Category } from "../../types"
import { mapToArray } from "../../helpers/mapToAray"
import { api } from "../../utils/axios"

type GetAllPayload = {
    text: string | null
    color: string | null
}

const addAxios = async (category: AddCategoryForm) => {
    const response = await api.post('/categories.json', category)
    return response.data
}

const getAllAxios = async () => {
    const response = await api.get('/categories.json');
    return mapToArray<Category>(response.data)

}


//___________________________________________________________________



export const categoriesService = {addAxios, getAllAxios }