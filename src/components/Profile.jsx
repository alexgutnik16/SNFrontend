import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { setUser, removeUser, setCurrentUser } from "../redux/actions/userActions";
import api from '../api/GetData';
import "../styles/profile.css"


function Profile() {

    let currentUser = useSelector((state) => state.currentUser.currentUser);
    let user = useSelector((state) => state.user);

    let { userId } = useParams();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (userId && userId !== "") {
    //         let data = api.getUser(userId);
    //         dispatch(setUser(data));
    //     }
    //     return () => {
    //         dispatch(removeUser());
    //     };
    // }, [userId]);

    // console.log()
  
    let data = api.getUser(userId);
    let users = api.getUsers();

    return(
        <div className="user">
            {(data === currentUser.nickname) ? (
                <div className="profile">
                    <h1>MY PROFILE</h1>
                    <h2>{ data }</h2>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                    <div className="subscribtions">
                        {users.map(user => 
                            <div key={user.id} className="subscribtion">
                                <p>{user.nickaname}</p>
                                <button>Unsubscribe</button>
                                <button>Unsubscribe</button>
                                <button>Ban</button>
                            </div>
                        )}
                    </div>
                    <div className="upload-video">
                        <button>+ Upload</button>
                    </div>
                </div>
            ) : (
                <div className="profile">
                    <h2>{ data }</h2>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img>
                    <div className="subscribtions">
                        {users.map(user => 
                            <div key={user.id} className="subscribtion">
                                <p>{user.nickaname}</p>
                                <button>Unsubscribe</button>
                                <button>Unsubscribe</button>
                                <button>Ban</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>    
    )
}

export default Profile;