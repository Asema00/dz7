import React from 'react';
import {Link} from "react-router-dom";
import {PATHS} from "../../App";

function Header() {
    return (
        <div>
            <Link to={PATHS.counter}>Counter</Link>
            <Link to={PATHS.posts}>Posts</Link>
        </div>
    );
}

export default Header;