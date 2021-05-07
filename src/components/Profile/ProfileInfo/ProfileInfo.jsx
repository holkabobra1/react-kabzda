// import React from 'react';
import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src='https://images.unsplash.com/photo-1595855524159-6a89fe9fa0f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=500&q=60' />
         </div>
         <div className={c.descriptionBlock}>
            ava + description
         </div>
      </div>
   )
}

export default ProfileInfo