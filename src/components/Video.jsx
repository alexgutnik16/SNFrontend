import React from "react";
import { Link } from 'react-router-dom';

import api from '../api/GetData';
import '../styles/video.css';


function Video(props) {

    function like() {
        document.getElementById("like").style.backgroundColor = "#BB2649";
    }

    return(
        <div className="video">
            <div className="video-main">
                <div className="video-user">
                    <Link className="video-user-link" to={'/profile/' + props.video.id}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img> 
                        <h2>{ props.video.user }</h2>
                    </Link>  
                    <button>Subscribe</button> 
                </div>
                <video controls preload="metadata">
                    <source src={ props.video.link } type="video/mp4"/>
                </video> 
            </div>
            <div className="video-data">
                <div className="video-info" >
                    <Link to={'/video_detail/' + props.video.id}>
                        <h3>{ props.video.heading }</h3>
                    </Link>
                    <p>text text text text text text text</p> 
                    <div id="like" className="like-button" onClick={like}>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png"/>
                    </div>
                </div>
            </div> 
        </div>
    );

};

export default Video;