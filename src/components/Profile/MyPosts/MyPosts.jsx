// import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

   let postsElements = props.posts.map( post => <Post message={post.message} likes={post.likesCount} /> )

   return (
      <div className={c.postsBlock}>
         <h3>
            My posts
         </h3>
         <div>
            <textarea name="" id="" cols="15" rows="2"></textarea>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={c.posts}>
            { postsElements }
         </div>
      </div>
   )
}

export default MyPosts