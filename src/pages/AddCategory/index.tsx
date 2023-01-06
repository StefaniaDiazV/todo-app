import { FC } from "react"
import { Layout } from "../../components/layout"
import { CategoryForm } from '../../components/forms'

const AddCategory: FC = () => {
    return (
        <div>
            <Layout>
                <CategoryForm/>
            </Layout>
        </div>
    )
}

export { AddCategory }