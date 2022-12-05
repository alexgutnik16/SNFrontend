import React from "react";

import Video from "./Video";
import '../styles/subto-posts.css';


function SubPosts() {
    return(
        <div className="posts">
            <h3>Sub Posts</h3>
            <Video id='1'/>
            <Video id='2'/>
            <Video id='3'/>
            <Video id='4'/>
        </div>
    )
}

export default SubPosts;