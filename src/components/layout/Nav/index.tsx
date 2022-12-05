import { FC } from 'react'
import './style.scss'


const Nav: FC = ({}) => {
    return (
        <nav className="main-menu">
            <h1 className='main-title'>ToDoApp</h1>
            <ul className="nav-bar">
                <li className="list-item">
                    <button className="btn-item">
                        Login
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        SignUp
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        Dashboard
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        Task
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        Categories
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        AddTask
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        AddCategory
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        Profile
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export { Nav }