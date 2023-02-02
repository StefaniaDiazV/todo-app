import { Header } from '../Header'
import { Footer } from '../Footer'
import { FC, ReactNode } from 'react'
import './style.scss'
import { Aside } from '../Aside'


type Props = {
    children: ReactNode
}

const Main: FC<Props> = ({children}) => {
    return (
        <>
            <Header />
            <div className='d-flex flex-grow-1'>
                <Aside/>
                <main className='main  flex-grow-1'>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    )
}

export { Main }