import { FC } from "react"
import { Layout } from "../../components/layout"
import { UserForm } from '../../components/forms'

const SignUp: FC= () => {
    return (
        <div>
            <Layout>
                <UserForm/>
            </Layout>            
        </div>
    )
}

export { SignUp }