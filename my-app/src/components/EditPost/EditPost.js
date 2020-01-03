import React, { Component } from 'react';
import axios from '../../axios';

import './EditPost.css';

class NewPost extends Component {
    constructor(props){
        super(props);

        this.state = {
            post: {
                title: "",
                content: "",
                author: "",
                id: "",
            }
        }
    }

    async componentWillReceiveProps(props, state){
        console.log("[componentWillReceiveProps]", { props, state });
        if(!props.id) return null;

        const result = await axios.get( '/posts/' + props.id );
        console.log("[componentWillReceiveProps] result", result.data);
        this.setState({ post: result.data })
    }

    componentDidUpdate(){
        console.log("[EditPost] componentDidUpdate")
    }

    putDataHandler = () => {
        console.log("[putDataHandler]", this.state.post);
        axios.put(`/posts/${this.state.post.id}`, this.state.post)
            .then(response => {
                console.log("[response] PUT", response);
                this.props.onEditSuccess();
            });
    }

    render () {
        console.log("[EditPost] render", this.state.post);
        return (
            <div className="NewPost">
                <h1>Edit Post { this.state.title }</h1>
                <label>Title</label>
                <input type="text" value={this.state.post.title} onChange={(event) => this.setState({post: {...this.state.post, title: event.target.value}})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.post.content} onChange={(event) => this.setState({post: {...this.state.post, content: event.target.value}})} />
                <label>Author</label>
                <select value={this.state.post.author} onChange={(event) => this.setState({post: {...this.state.post, author: event.target.value}})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.putDataHandler}>Update Post</button>
            </div>
        );
    }
}

export default NewPost;