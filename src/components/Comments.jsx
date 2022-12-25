import React, { useState } from "react";

import '../styles/comments.css'

function Comments(props) {

    const comments = props.comments.comments.comments;
    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        setComment(e.tarhet.value);
    }

    return(
        <div className="comments">
            <form method="post">
                <input type="text" 
                    name="text"
                    placeholder="Add comment"
                    onChange={ handleChange }
                />
            </form>
            {comments.map(comment => <p>{ comment }</p>)}  
        </div>
    )
}

export default Comments;