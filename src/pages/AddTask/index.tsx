import { FC } from "react"
import { Layout } from "../../components/layout"
import { TaskForm } from '../../components/forms'

const AddTask: FC = () => {
    return (
        <div>
            <Layout>
                <TaskForm/>
            </Layout>
        </div>
    )
}

export { AddTask }