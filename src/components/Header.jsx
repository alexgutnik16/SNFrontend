import React, { useState, useEffect} from "react";
import {Link, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import api from '../api/GetData';
import { setCurrentUser } from "../redux/actions/userActions";
import "../styles/header.css"

function Header() {
    const [loggedIn, setloggedIn] = useState(false);

    let testId = '1'
    let currentUser = useSelector((state) => state.currentUser.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        let data = api.getUser(testId);
        dispatch(setCurrentUser(data));
        setloggedIn(true);
    }, []);

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return(
        <React.Fragment>
            <header className="header">
                <Link to='/' className="header-logo"><h2>Videos</h2></Link>
                <nav id="navigation">
                    <NavLink id='rec' to='/' className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                        }>Reccomended
                    </NavLink>
                    <NavLink id='sub' to='/subposts' className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                        }>Subscribtions
                    </NavLink>
                    <NavLink id='search' to='/search' className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                        }>Search
                    </NavLink>
                </nav>
                <div className="user">
                    {loggedIn ? (
                        <div className="user-logged-in">
                            <Link className="userinfo" to={'/profile/' + testId}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                <h3>{ currentUser.nickname }</h3>
                            </Link>
                            <button onClick={() => setloggedIn(false)}>Log Out</button>
                        </div>
                    ) : (
                        <div className="user-logged-out">
                            <button onClick={() => setloggedIn(true)}>Log In</button>
                        </div>
                    )}
                </div>
            </header>
            <div className="mobile-header">
                <Link to='/' className="header-logo"><h2>Videos</h2></Link>
                <div className="nav">
                    <span onClick={openNav}>&#9776; </span>
                    <div id="mySidenav" className="sidenav">
                        <div className="wrap-closebtn" onClick={closeNav}>
                            <a className="closebtn" href="javascript:void(0)">&times;</a>
                        </div>
                        <div className="sidenav-elements">
                            <NavLink id='rec' to='/' onClick={closeNav} className={({ isActive }) =>
                                isActive
                                    ? "active"
                                    : ""
                                }>Reccomended
                            </NavLink>
                            <NavLink id='sub' to='/subposts' onClick={closeNav} className={({ isActive }) =>
                                isActive
                                    ? "active"
                                    : ""
                                }>Subscribtions
                            </NavLink>
                            <NavLink id='search' to='/search' onClick={closeNav} className={({ isActive }) =>
                                isActive
                                    ? "active"
                                    : ""
                                }>Search
                            </NavLink>
                        </div>
                        <div className="user">
                                {loggedIn ? (
                                    <div className="user-logged-in">
                                        <Link onClick={ closeNav } className="userinfo" to={'/profile/' + testId}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                            <h3>{ currentUser.nickname }</h3>
                                        </Link>
                                        <button onClick={() => setloggedIn(false)}>Log Out</button>
                                    </div>
                                ) : (
                                    <div className="user-logged-out">
                                        <button onClick={() => setloggedIn(true)}>Log In</button>
                                    </div>
                                )}
                            </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}

export default Header;