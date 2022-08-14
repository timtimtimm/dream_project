import React from 'react';
import Mine_posts from './Mine_posts';
import { onAddPost, getProfileUser, getStatusUser, updateStatusUser, sendPhoto } from './../../../redax/profile-reduser';
import { connect } from 'react-redux';
import { authNavigate } from '../../Hoc/AuthNavigate';
import { compose } from 'redux'

class Mine_postsContainer extends React.Component {

  getProfile() {
    let userId = this.props.id;
    if (!userId) {
      userId = this.props.myId;
      if (!userId) {
        this.props.history.push('/logine')
      }
    }
    this.props.getProfileUser(userId);
    this.props.getStatusUser(userId);
  }

  componentDidMount() {
    this.getProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.getProfile();
    }
  }
  render() {
    return <Mine_posts
      profile={this.props.profile}  {...this.props} isOwner={!this.props.id}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile,
    profileUserData: state.profile.profileUserData,
    isAuth: state.auth.isAuth,
    status: state.profile.status,
    myId: state.auth.userId
  }
}

export default compose(connect(mapStateToProps,
  { onAddPost, getProfileUser, getStatusUser, updateStatusUser, sendPhoto }
), authNavigate)(Mine_postsContainer);
