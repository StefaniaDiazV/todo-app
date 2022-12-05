import { FC } from "react"
import { Layout } from "../../components/layout"

type Props = {
    onChangePage: (value:string) => void
}

const Dashboard: FC<Props> = ({onChangePage}) => {
    return (
        <div>
            <Layout onChangePage={onChangePage}>
                <h1> Dashboard</h1>
            </Layout>           
        </div>
    )
}

export { Dashboard }