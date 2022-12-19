import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Video from "./Video";
import api from '../api/GetData';
import { setRecVideos } from '../redux/actions/videoActions';
import "../styles/rec-posts.css";


function RecPosts() {
    const recVideos = useSelector((state) => state.recVideos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        let data = api.getRecVideos();
        dispatch(setRecVideos(data));
    }, []);

    return(
        <div className="container">
            <div className="posts">
                {recVideos.map(video => <Video video={video} key={video.id}/>)}
            </div>
        </div>
    )
}

export default RecPosts;