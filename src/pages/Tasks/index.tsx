import { FC } from "react"
import { Layout } from "../../components/layout"

type Props = {
    onChangePage: (value:string) => void
}

const Task: FC<Props> = ({onChangePage}) => {
    return (
        <div>
            <Layout onChangePage={onChangePage}>
                <h1>Task</h1>
            </Layout>            
        </div>
    )
}

export { Task }