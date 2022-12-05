import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Comments from "./Comments";
import getVideo from "../api/GetData";
import '../styles/video.css';


function Video(props) {

    let apiVideo = getVideo(props.id);
    const [video, setVideo] = useState(apiVideo);

    return( 
        <div className="video">
            <div className="video-main">
                <video width="750" height="500" controls preload="metadata">
                    <source src={ video } type="video/mp4"/>
                </video> 
            </div>
            <div className="video-data">
                <div className="video-user">
                    <Link to='/profile'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img> 
                    </Link> 
                    <h2>Nickname</h2>
                    <button>Subscribe</button> 
                </div>
                <div className="video-info" >
                    <h3>Heading</h3>
                    <p>text text text text text text text</p> 
                    <button>Like</button>
                </div>
                <Comments/>
            </div> 
        </div>          
    );
};

export default Video;