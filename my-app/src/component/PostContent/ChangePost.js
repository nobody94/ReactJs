import React from 'react';
import axios from '../../axios';

class ChangePost extends React.Component{  
    constructor(props){
        super(props);
        this.state = {
            loadedPost:null,
        };
        this.onChangeHandle = this.onChangeHandle .bind(this);           
    }
    componentDidUpdate () {
        if (this.props.id) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {                
                axios.get( '/posts/' + this.props.id)
                    .then( response => {
                        console.log("did update",response.data);
                        this.setState( { loadedPost: response.data } );  
                        console.log("state",this.state.loadedPost);
                    } );
            }
        } 
    }
    
    changePostHandle = () => {  
        const post = {
            ...this.state.loadedPost
        }        
        axios.put('/posts/' + this.props.id ,post)
        .then(response => {
            console.log("Change Post",response);
        });
    }
    
    onChangeHandle = ({target}) => {
        this.setState({
            loadedPost : {
                ...this.state.loadedPost,[target.name]:target.value
            }
        });
        console.log("state changing",this.state.loadedPost);        
    }
   
    deletePostHandle = () => {        
        axios.delete('/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        });
    }
    
    render(){
        const error = null;
        if(this.state.loadedPost !== error){
            return(
                <div className="post change">
                    <h1>Edit Post</h1>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.loadedPost.title} onChange={this.onChangeHandle}></input>
                    <label>Content</label>
                    <textarea rows="4" name="content" value={this.state.loadedPost.content} onChange={this.onChangeHandle}></textarea>
                    <label>Author</label>
                    <select value={this.state.loadedPost.author} name="author" onChange={this.onChangeHandle}> 
                        <option>Choose author</option>
                        <option value="Max">Max</option>
                        <option value="Manu">Manu</option>
                    </select>
                    <div className="control-action">
                        <button className="action change" onClick={this.changePostHandle}>Submit</button>
                        <button className="action delete" onClick={this.deletePostHandle}>Delete Post</button>
                    </div>               
                </div>
            );
        } else {
            return(
                <div className="post change">
                    <h1 className="message">Click a Post to edit</h1>                    
                </div>
            );
        } 
    }    
}

export default ChangePost;