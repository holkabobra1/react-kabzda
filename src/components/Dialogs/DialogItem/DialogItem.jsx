import { NavLink } from 'react-router-dom'
import c from '../Dialogs.module.css'

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id

   return (
      <div className={c.dialog}>
         <img src={props.avatar} alt=""/>
         <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
      </div>
   )
}

export default DialogItem