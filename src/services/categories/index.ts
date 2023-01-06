import { Category } from "../../types"
import { DB_BASE_URL } from "../../constants"
import { mapToArray } from "../../helpers/mapToAray"

const getAll = async (): Promise<Category[]> => {
    const response = await fetch (`${DB_BASE_URL}/categories.json`)
    const data = await response.json()
    return mapToArray<Category>(data);
}

const getAllUse = async (search?: string, color?: string): Promise<Category[]> => {
    const response = await fetch(`${DB_BASE_URL}/categories.json`);
    const data = await response.json();
  
    const categories = mapToArray<Category>(data);
  
    return search 
      ? categories
        .filter((elem) => elem.name.includes(search))
      : categories;
  };

type payload = Omit<Category, 'id'>

export const add = async (category : payload) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(category)
    }
   const response = await fetch(`${DB_BASE_URL}/categories.json`, options)
   const data = await response.json()
   if(data.name) {
    return true
   } else {
    return false
   }
}

const get = async (id:string): Promise<Category> => {
    const response = await fetch(`${DB_BASE_URL}/categories/${id}.json`)
    const data = await response.json()
    return{ id, ...data}
}

const update = async ( { id, name }: Category) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify({name})
    };
    const response = await fetch(`${DB_BASE_URL}/categories/${id}.json`, options)
}

const remove = async (id: any) => {
    const options = {
        method: 'DELETE',
    };
    await fetch(`${DB_BASE_URL}/categories/${id}.json`, options)
    
} 

export const categoriesService = { getAll, get, add, update, remove, getAllUse }