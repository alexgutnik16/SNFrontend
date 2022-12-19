import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Video from "./Video";
import api from '../api/GetData';
import { setSubVideos } from "../redux/actions/videoActions";
import '../styles/subto-posts.css';


function SubPosts() {
    const subVideos = useSelector((state) => state.subVideos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        let data = api.getSubVideos()
        dispatch(setSubVideos(data))
    }, []);

    return(
        <div className="container">
            <div className="posts">
                {subVideos.map(video => <Video video={video} key={video.id}/>)}
            </div>
        </div>
    )
}

export default SubPosts;