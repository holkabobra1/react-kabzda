import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
   let messageElements = props.state.messages.map( message => <Message message={message.message}/>)
 
   return (
      <div className={c.dialogs}>
         <div className={c.dialogsItems}>
            { dialogsElements }
         </div>
         <div className={c.messages}>
            { messageElements }
         </div>
      </div>
   )
}

export default Dialogs