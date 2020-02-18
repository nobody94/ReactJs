import React from 'react';

function Practice(props){
    return(
        <div className="Practice">
             <h3 className="title">Practice 2</h3>    
             <div className="favorite-list">
                Favorite fruit: {props.list.fruit} <br></br>
                Favorite music: {props.list.music} <br></br>
                Favorite movie: {props.list.movie} <br></br>
             </div>             
        </div>
    );
}

export default Practice;