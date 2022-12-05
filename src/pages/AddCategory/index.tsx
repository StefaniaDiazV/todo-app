import { FC } from "react"
import { Layout } from "../../components/layout"
import { CategoryForm } from '../../components/forms'

type Props = {
    onChangePage: (value:string) => void
}

const AddCategory: FC<Props> = ({onChangePage}) => {
    return (
        <div>
            <Layout onChangePage={onChangePage}>
                <CategoryForm/>
            </Layout>
        </div>
    )
}

export { AddCategory }