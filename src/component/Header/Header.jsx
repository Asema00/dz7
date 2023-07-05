import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {PATHS} from "../../App";
import classes from './Header.module.css'

function Header() {
    return (
        <div >
            <header>
                <NavLink to={PATHS.posts} className={({isActive})=> isActive ? classes.active : '' }>Posts</NavLink>
                <NavLink to={PATHS.mui} className={({isActive})=> isActive ? classes.active : '' }>MUI</NavLink>
            </header>
        </div>
    );
}

export default Header;