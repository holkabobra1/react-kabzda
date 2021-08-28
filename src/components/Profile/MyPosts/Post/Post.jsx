// import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
   return (
      <div className={c.item}>
         <img src="https://pbs.twimg.com/profile_images/1234469504186507266/8UdohNON_400x400.jpg" alt="" />
         {props.message}
         <div>
            <span>likes: {props.likes}</span>
         </div>
      </div>
   )
}

export default Post



