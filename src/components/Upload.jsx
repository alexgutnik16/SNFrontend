import React, { useState } from "react";

import '../styles/upload.css';


function Upload() {

    const [video, setVideo] = useState(null);
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
 
    const handleFileChange = (e) => {
        setVideo(e.target.files);
    }

    const handleHeadingChange = (e) => {
        setHeading(e.target.value)
    }

    const handleTextChange = (e) => {
        setDescription(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(video);
        console.log(heading);
        console.log(description);
    }

    return(
        <div className="upload">
            <h2>Upload Video</h2>
            <form method="post">
                <input type="file"
                    name="video"
                    placeholder="Upload video"
                    onChange={ handleFileChange }
                />
                <input type="text" 
                    name="heading"
                    placeholder="Heading"
                    onChange={ handleHeadingChange }
                />
                <input type="text" 
                    name="description"
                    placeholder="Description"
                    onChange={ handleTextChange }
                />
                <button onClick={ onSubmit }>Submit</button>
            </form>
        </div>
    )
}

export default Upload;