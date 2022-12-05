import { FC } from 'react'
import {Nav} from '../Nav'


type Props = {
    onChangePage: (value:string) => void
}

const Header: FC<Props> = ({onChangePage}) => {
    return (
        <header>
            <Nav onChangePage={onChangePage}/>
        </header>
    )
}

export { Header }