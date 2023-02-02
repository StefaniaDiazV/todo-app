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
                        <NavLink className='nav-link'to={'/login'}>
                        Login
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink className='nav-link' to={'/sign-up'}>
                        SignUp
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink className='nav-link' to={'/dashboard'}>
                        Dashboard
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink className='nav-link' to={'/categories'}>
                        Categories
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink className='nav-link' to={'/add-task'}>
                        AddTask
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item">
                        <NavLink className='nav-link' to={'/categories/add-category'}>
                        AddCategory
                        </NavLink>
                    </button>
                </li>
                <li className="list-item">
                    <button className="btn-item" >
                        <NavLink className='nav-link' to={'/profile'}>
                        Profile
                        </NavLink>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export { Nav }