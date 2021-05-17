import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

   let postsElements = props.posts.map( post => <Post message={post.message} likes={post.likesCount} /> )

   let newPostElement = React.createRef()

   const addPost = () => {
      let text = newPostElement.current.value
      props.addPost(text)
      props.updateNewPostText('')
   }

   const onPostChange = () => {
      let text = newPostElement.current.value
      props.updateNewPostText(text)
   }

   return (
      <div className={c.postsBlock}>
         <h3>
            My posts
         </h3>
         <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/> 
            <div>
               <button onClick={ addPost }>Add post</button>
            </div>
         </div>
         <div className={c.posts}>
            { postsElements }
         </div>
      </div>
   )
}

export default MyPosts