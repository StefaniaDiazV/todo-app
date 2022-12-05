import { FC } from 'react'
import './style.scss'

type Props = {
    onChangePage: (value: string) => void
}

const Nav: FC<Props> = ({onChangePage}) => {
    return (
        <nav className="main-menu">
            <h1 className='main-title'>ToDoApp</h1>
            <ul className="nav-bar">
                <li className="list-item">
                    <button className="btn-item" onClick={() => onChangePage('Login')}>
                        Login
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item" onClick={() => onChangePage('SignUp')} >
                        SignUp
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item" onClick={() => onChangePage('Dashboard')} >
                        Dashboard
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item" onClick={() => onChangePage('Task')} >
                        Task
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item" onClick={() => onChangePage('Categories')} >
                        Categories
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item" onClick={() => onChangePage('AddTask')} >
                        AddTask
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item" onClick={() => onChangePage('AddCategory')} >
                        AddCategory
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item" onClick={() => onChangePage('Profile')} >
                        Profile
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export { Nav }