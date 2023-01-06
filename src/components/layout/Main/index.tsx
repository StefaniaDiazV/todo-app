import { Header } from '../Header'
import { Footer } from '../Footer'
import { FC, ReactNode } from 'react'
import './style.scss'


type Props = {
    children: ReactNode
}

const Main: FC<Props> = ({children}) => {
    return (
        <div className='layout'>
        <Header />
        <main className='main'>
            {children}
        </main>
        <Footer/>
        </div>
    )
}

export { Main }