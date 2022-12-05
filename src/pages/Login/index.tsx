import { FC } from 'react'
import { Layout } from '../../components/layout/index'
import { LoginForm, UserForm } from '../../components/forms'


const Login: FC = () => {
    return (
        <>
            <Layout>
                <LoginForm/>
            </Layout>            
        </>
    )
}

export { Login }