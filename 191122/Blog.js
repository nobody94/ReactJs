import React from 'react';
import axios from '../axios';
import Post from '../components/Post/Post';
import ChangePost from '../components/PostContent/ChangePost';
import CreatePost from '../components/PostContent/CreatePost';
import PostEdit from '../components/PostContent/PostEdit';
import PostDetail from '../components/PostContent/PostDetail';
import './Blog.css';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post : [],
            postId: null,
            error:false,
            isClicked: false
        };        
    }
    componentDidMount(){
        this.getListPost();
     }  
     getListPost = () => {
          console.log("[getListPost]");
          axios.get('/posts')
          .then(reponse => {
               const posts = reponse.data.slice(0,4);
               const updatePosts = posts.map(post => {
                   return{
                       ...post
                   }
               }); 
               this.setState({post : updatePosts});
               console.log('state',this.state.post);
          })
          .catch(error => {
              this.setState({error:true});
          });
      }
     postSelectedHandle = (id) => {
         if(this.state.isClicked){
              this.setState({
                  postId : id
              });
         } else {
              this.setState({
                  postId : id,
                  isClicked : true
              });
         }   
     }
      render(){  
          let post = <p>Something went wrong!</p>;  
          if(!this.state.error){
              post = this.state.post.map(post =>{
                  return <Post key={post.id} 
                  title={post.title} 
                  author={post.author} 
                  clicked={() => this.postSelectedHandle(post.id)}/>;                
              });
          }
          return(
              <div className="Blog">                
                  <section className="Posts">
                      {post}
                  </section>
                  <section className="post-content">
                  <ChangePost id={this.state.postId} onEditSuccess={this.getListPost}/>
                  {/* <PostDetail id={this.state.postId}/>
                  <PostEdit id={this.state.postId} onEditSuccess={this.getListPost}/> */}
                  <CreatePost id={this.state.postId} onAddSuccess={this.getListPost}/>
                  </section>
              </div>
          );
      }
}

export default Blog;