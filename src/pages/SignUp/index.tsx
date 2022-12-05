import { FC } from "react"
import { Layout } from "../../components/layout"
import { UserForm } from '../../components/forms'

type Props = {
    onChangePage: (value:string) => void
}

const SignUp: FC<Props> = ({onChangePage}) => {
    return (
        <div>
            <Layout onChangePage={onChangePage}>
                <UserForm/>
            </Layout>            
        </div>
    )
}

export { SignUp }