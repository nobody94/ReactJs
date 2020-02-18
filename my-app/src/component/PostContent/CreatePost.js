import React from 'react';
import axios from '../../axios';

class CreatePost extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            title: '',
            content: '',
            author: '',                         
        };
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    createPostHandle = () => {
        const data = {
            title : this.state.title,
            content : this.state.content,
            author : this.state.author
        };
        axios.post('/posts',data)
        .then(response => {
            console.log("Add Post",response);
            this.props.onAddSuccess();
        });
    }
   
    onChangeHandle = ({target}) => {
        this.setState({
            [target.name] : target.value
        });
    }
    render(){
        return(
            <div className="post create">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.onChangeHandle}></input>
                <label>Content</label>
                <textarea rows="4" name="content" value={this.state.content} onChange={this.onChangeHandle}></textarea>
                <label>Author</label>
                <select value={this.state.author} name="author" onChange={this.onChangeHandle}> 
                    <option>Choose author</option>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <div className="control-action">
                    <button className="action add" onClick={this.createPostHandle}>Add Post</button>
                </div>                
            </div>
        );
    }    
}

export default CreatePost;