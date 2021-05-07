// import React from 'react';
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'
import c from './Navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/news" activeClassName={c.active}>News</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
      </div>
      <div className={c.item + ' ' + c.settings}>
        <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
      </div>

      <Friends friends={props.friends.dialogs}/>

    </nav>
  )
}

export default Navbar