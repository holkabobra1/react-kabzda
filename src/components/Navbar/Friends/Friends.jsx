// import React from 'react';
import { NavLink } from 'react-router-dom'
import c from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = (props) => {
   const friendsElements = props.friends.map( el => <FriendsItem avatar={el.avatar} name={el.name}/>)

   return (
      <div>
         <div className={c.friends}>
            Friends
         </div>
         <div>
            {friendsElements}
         </div>
      </div>
   )
}

export default Friends