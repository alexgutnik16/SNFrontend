import React from "react";

import '../styles/comments.css'

function Comments(props) {

    const comments = props.comments.comments.comments;
    
    return(
        <div className="comments">
            {comments.map(comment => <p>{ comment }</p>)}
        </div>
    )
}

export default Comments;