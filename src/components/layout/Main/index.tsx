import { Header } from '../Header'
import { Footer } from '../Footer'
import { FC, ReactNode } from 'react'
import './style.scss'


type Props = {
    onChangePage: (value:string) => void
    children: ReactNode
}

const Main: FC<Props> = ({children, onChangePage}) => {
    return (
        <div className='layout'>
        <Header onChangePage={onChangePage}  />
        <main className='main'>
            {children}
        </main>
        <Footer/>
        </div>
    )
}

export { Main }