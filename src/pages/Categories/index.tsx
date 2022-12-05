import { FC } from "react"
import { Layout } from "../../components/layout"

type Props = {
    onChangePage: (value: string) => void
}

const Categories: FC<Props> = ({onChangePage}) => {
    return (
        <div>
            <Layout onChangePage={onChangePage}>
                <h1>Categories</h1>
            </Layout>
        </div>
    )
}

export { Categories }