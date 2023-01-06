import { FC } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'


const Nav: FC = ({}) => {
    return (
        <nav className="main-menu">
            <h1 className='main-title'>ToDoApp</h1>
            <ul className="nav-bar">
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink to={'/login'}>
                        Login
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink to={'/sign-up'}>
                        SignUp
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink to={'/dashboard'}>
                        Dashboard
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink to={'/tasks'}>
                        Tasks
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink to={'/categories'}>
                        Categories
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink to={'/add-task'}>
                        AddTask
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink to={'/add-category'}>
                        AddCategory
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink to={'/profile'}>
                        Profile
                        </NavLink>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export { Nav }