import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <nav className='nav-bar'>
            <Link to='/' className='app-title'>KTMInv</Link>
            <ul>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/inventory'>Inventory</CustomLink>
                <CustomLink to='/logout'>Logout</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
