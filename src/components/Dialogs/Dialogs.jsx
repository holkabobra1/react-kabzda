import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
   let messageElements = props.state.messages.map( message => <Message message={message.message}/>)

   const msgElement = React.createRef()
   const sendMsg = () => {
      let text = msgElement.current.value
      alert(text)
   }
 
   return (
      <div className={c.dialogs}>
         <div className={c.dialogsItems}>
            { dialogsElements }
         </div>
         <div className={c.messages}>
            { messageElements }
            <div>
               <textarea ref={ msgElement }></textarea>
               <div>
                  <button onClick={ sendMsg }>Send</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs