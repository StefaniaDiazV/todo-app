import { FC } from 'react'
import { Layout } from '../../components/layout/index'
import { LoginForm, UserForm } from '../../components/forms'

type Props = {
    onChangePage: (value:string) => void
}


const Login: FC<Props> = ({onChangePage}) => {
    return (
        <>
            <Layout onChangePage={onChangePage}>
                <LoginForm/>
            </Layout>            
        </>
    )
}

export { Login }