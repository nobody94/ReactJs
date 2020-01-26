import React, { Component, Suspense } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
  } from "react-router-dom";
  
// import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
const Post = React.lazy(() => import('../../components/Post/Post'));
class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div>                
                {/* <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>                  */}
                 <header>
                    <nav>
                        <ul>
                            {/* <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                            <li><Link to="/full-post">Full Post</Link></li>
                            <li><Link to="/post">Post</Link></li> */}
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'none'
                                }}>Home</NavLink></li>                            
                            <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/posts',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path ="/new-post" component={NewPost} />
                <Route path ="/full-post" component={FullPost} />
                <Route path ="/post" render={() =>  <section className="Posts">
                    {posts}
                </section>}  /> */}
                 <Switch>
                    <Route path="/" exact render={() => <h1>Home</h1>} >
                        {/* <Redirect to="/posts" /> */}
                    </Route>
                    <Route path="/new-post" component={NewPost} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path="/posts" render={() =>  <section className="Posts">
                        {posts}
                        </section>} />   
                    </Suspense>                                    
                </Switch>
            </div>
        );
    }
}

export default Blog;