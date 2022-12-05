import { Category } from "../types"

const getCategories = () => {

}

export const addCategory= (payload: any) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(payload)
    }
    fetch("https://todoapp-3798f-default-rtdb.firebaseio.com/categories.json", options)
}

const getCategory = (id:string) => {

}

const updateCategory = (id:string, payload: Category) => {

}

const removCategory = (id: string) => {
    
} 