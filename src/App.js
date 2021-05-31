// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'

import { BrowserRouter, Route } from 'react-router-dom'
import { addPost } from './redux/state';

const App = (props) => {
   return (
      <div className='app-wrapper'>
         <Header />
         <Navbar friends={props.state.dialogsPage} />
         <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />

            <Route path='/profile' 
                   render={() => <Profile 
                        profilePage={props.state.profilePage} 
                        dispatch={props.dispatch} />} />

            <Route path='/music' component={Music} />
            <Route path='/news' component={News} />
            <Route path='/settings' component={Settings} />
         </div>
      </div>
   );
}

export default App;
