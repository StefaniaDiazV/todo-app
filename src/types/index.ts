export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date 
}


export type SignUpForm = Omit<User, 'id' | 'birthdate'> & { birthdate: Date}
export type SignUpPayload = SignUpForm


export type Category = {
    id: string
    name: string
    color: string
}

export type AddCategoryForm = Omit<Category, 'id'>
export type AddCategoryPayload = AddCategoryForm

export type Task = {
    id: string
    title: string
    date: Date
    category: Category
    description: string
    status: string
}


export type AddTaskForm = Omit<Task, 'id' | 'category' | 'date'> & { category: string, date: string }
export type AddTaskPayload = Omit<Task, 'id'>
