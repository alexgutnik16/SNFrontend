import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import Comments from "./Comments";
import api from '../api/GetData';
import { setVideo, removeVideo } from "../redux/actions/videoActions";
import { setComments, removeComments } from '../redux/actions/commentActions';
import '../styles/video.css';


function VideoDetail() {

    const { videoId } = useParams();

    let video = useSelector((state) => state.video);
    let comments = useSelector((state) => state.comments);

    const dispatch = useDispatch();

    useEffect(() => {
        if (videoId && videoId !== "") {
            let data = api.getComments(videoId)
            dispatch(setComments(data))
        }
        return () => {
            dispatch(removeComments())
        };
    }, [videoId]);

    useEffect(() => {
        if (videoId && videoId !== "") {
            let data = api.getVideo(videoId)
            dispatch(setVideo(data))
        }
        return () => {
            dispatch(removeVideo())
        };
    }, [videoId]);

    function like() {
        document.getElementById("like").style.backgroundColor = "#BB2649";
    }

    return(
        <React.Fragment>
        {Object.keys(video).length === 0  ? (
            <div className="no-data">
                <h2>No data</h2>
            </div>
        ) : (
            <div className="data">
                <div className="video">
                    <div className="video-main">
                        <div className="video-user">
                            <Link className="video-user-link" to={'/profile/' + video.videos.id}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png" alt='avatar'></img> 
                                <h2>{ video.videos.user }</h2>
                            </Link>  
                            <button>Subscribe</button> 
                        </div>
                        <video width="750" height="500" controls preload="metadata">
                            <source src={ video.videos.link } type="video/mp4"/>
                        </video> 
                    </div>
                    <div className="video-data">
                        <div className="video-info" >
                            <h3>{ video.videos.heading }</h3>
                            <p>text text text text text text text</p> 
                            <div id="like" className="like-button" onClick={like}>
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png"/>
                            </div>
                        </div>
                        {Object.keys(comments).length === 0  ? (
                            <div className="no-data">
                                <h2>No data</h2>
                            </div>
                        ) : (
                            <Comments comments={comments} key={videoId}/>
                        )}
                    </div> 
                </div>
            </div>
        )}
        </React.Fragment>  
    );
};

export default VideoDetail;