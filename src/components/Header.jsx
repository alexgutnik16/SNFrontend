import React from "react";
import {Link} from 'react-router-dom';

import "../styles/header.css"

function Header() {
    return(
        <header className="header">
            <Link to='/' className="header-logo"><h2>Videos</h2></Link>
            <nav>
                <Link to='/'>Reccomended</Link>
                <Link to='/subposts'>Subscribed</Link>
            </nav>
            <div className="userinfo">
                <Link to='/profile'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                </Link>
                <h3>Nickname</h3>
            </div>
        </header>
    )
}

export default Header;