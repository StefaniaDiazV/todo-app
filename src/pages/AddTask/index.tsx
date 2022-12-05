import { FC } from "react"
import { Layout } from "../../components/layout"
import { TaskForm } from '../../components/forms'


type Props = {
    onChangePage: (value:string) => void
}

const AddTask: FC<Props> = ({onChangePage}) => {
    return (
        <div>
            <Layout onChangePage={onChangePage}>
                <TaskForm/>
            </Layout>
        </div>
    )
}

export { AddTask }