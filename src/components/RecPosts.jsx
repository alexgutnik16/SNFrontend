import React from "react";

import Video from "./Video";
import "../styles/rec-posts.css";


function RecPosts() {
    return(
        <div className="posts">
            <h3>Rec Posts</h3>
            <Video id='1'/>
            <Video id='2'/>
            <Video id='3'/>
            <Video id='4'/>
        </div>
    )
}

export default RecPosts;