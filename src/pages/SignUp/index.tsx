import { FC } from "react"
import { Layout } from "../../components/layout"
import { SignupForm } from '../../components/forms'

const SignUp: FC= () => {
    return (
        <div>
            <Layout>
                <SignupForm/>
            </Layout>            
        </div>
    )
}

export { SignUp }