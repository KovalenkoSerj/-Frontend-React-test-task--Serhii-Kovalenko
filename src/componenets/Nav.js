import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => (
    <nav>
        <ul className='header-nav'>
            <li className='header-nav-item'>
                <NavLink className='header-nav-item__link' to='/'>People List</NavLink>
            </li>
            <li className='header-nav-item'>
                <NavLink className='header-nav-item__link' to='/favorites'>Favorites</NavLink>
            </li>
        </ul>
    </nav>
)