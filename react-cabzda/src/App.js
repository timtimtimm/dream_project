
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Logine/Logine';
import React from 'react';
import { connect } from 'react-redux';
import { getSuccessedInitialise } from './redax/app-reduser ';
import Preloader from './support/preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.getSuccessedInitialise();
  }

  render() {
    if (!this.props.initialise) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <Router>
          <HeaderContainer />
          <div className='nav'>
            <Navbar />
          </div>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Profile/:id' element={<Profile />} />
              <Route path='/News' element={<News />} />
              <Route path='/Dialogs' element={<DialogsContainer />} />
              <Route path='/Users' element={<UsersContainer />} />
              <Route path='/Music' element={<Music />} />
              <Route path='/Setting' element={<Setting />} />
              <Route path='/logine' element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div >

    );
  }

}

let mapStateToProps = (state) => (
  { initialise: state.app.initialise }
)
export default connect(mapStateToProps, { getSuccessedInitialise })(App);
