import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import api from '../api/GetData';
import "../styles/profile.css"


function Profile() {

    const [profile, setProfile] = useState([]);

    let currentUser = useSelector((state) => state.currentUser.currentUser);
    let { username } = useParams();

    useEffect(() => {
        api.getUser(username).then(result => {
            setProfile(result.data);
        })
    }, []);

    let users = api.getUsers();

    return(
        <div className="user">
            {(profile.nickname === currentUser.nickname) ? (
                <div className="profile">
                    <div className="profile-main">
                        <h3>My profile</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                        <h2>{ profile.nickname }</h2>
                    </div>
                    <div className="profile-add">
                        <div className="profile-button">
                            <Link to='/upload'>
                                <button>+ Upload video</button>
                            </Link>
                        </div>
                        <div className="subscribtions">
                            <h2>Subscribtions</h2>
                            {users.map(user =>
                                <div key={user.id} className="subscribtion">
                                    <Link className="video-user-link" to={'/profile/' + user.id}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                        <p>{ user.nickname }</p>
                                    </Link>
                                    <div className="subscribtion-actions">
                                        <button>Subscribed</button>
                                        <button>Ban</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="subscribtions">
                            <h2>Subscribed</h2>
                            {users.map(user =>
                                <div key={user.id} className="subscribtion">
                                    <Link className="video-user-link" to={'/profile/' + user.id}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                        <p>{ user.nickname }</p>
                                    </Link>
                                    <div className="subscribtion-actions">
                                        <button>Subscribed</button>
                                        <button>Ban</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="profile">
                    <div className="profile-main">
                        <h3>Profile</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                        <h2>{ profile.nickname }</h2>
                    </div>
                    <div className="profile-add">
                        <div className="profile-button">
                            <Link to={'/chat/' + profile.nickname + '_' + currentUser.nickname }>
                                <button>Text { profile.nickname }</button>
                            </Link>
                        </div>
                        <div className="subscribtions">
                            <h2>Subscribtions</h2>
                            {users.map(user =>
                                <div key={user.id} className="subscribtion">
                                    <Link className="video-user-link" to={'/profile/' + user.id}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                        <p>{ user.nickname }</p>
                                    </Link>
                                    <div className="subscribtion-actions">
                                        <button>Subscribed</button>
                                        <button>Ban</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="subscribtions">
                            <h2>Subscribed</h2>
                            {users.map(user =>
                                <div key={user.id} className="subscribtion">
                                    <Link className="video-user-link" to={'/profile/' + user.id}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                                        <p>{ user.nickname }</p>
                                    </Link>
                                    <div className="subscribtion-actions">
                                        <button>Subscribed</button>
                                        <button>Ban</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>    
    )
}

export default Profile;