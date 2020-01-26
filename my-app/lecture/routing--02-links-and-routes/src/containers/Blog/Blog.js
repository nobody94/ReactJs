import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
<<<<<<< HEAD
                            }}>New Post</Link></li>                            
=======
                            }}>New Post</Link></li>
                            <li><Link to="/full-post">Full Post</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
>>>>>>> 17d67c839753e52993aeedf8b7190c610b1a4000
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <h1>Home</h1>} />
<<<<<<< HEAD
                {/* <Route path="/2" render={() => <h1>Home 2</h1>} />
                <Route path="/" exact component={Posts} /> */}
=======
                <Route path="/full-post" component={ FullPost } />
                <Route path="/posts" component={ Posts } />
>>>>>>> 17d67c839753e52993aeedf8b7190c610b1a4000
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;