import React from 'react';
import './Post.css';

function Post(props){
    return(
        <div className="Post" onClick={props.clicked}>
            <h1 className="title">{props.title}</h1>
            <p className="author">{props.author}</p>
        </div>
    );
}

export default Post;