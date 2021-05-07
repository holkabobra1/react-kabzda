import c from "./FriendsItem.module.css"


const FriendsItem = (props) => {
   return (
      <div className={c.friendsItem}>
         <img src={props.avatar} alt=""/>
         <div>
            {props.name}
         </div>
      </div>
   )
}

export default FriendsItem