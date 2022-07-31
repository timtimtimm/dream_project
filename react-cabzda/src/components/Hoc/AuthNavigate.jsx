import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
}

export const authNavigate = (Component) => {

  class AuthNavigateContainer extends React.Component {
    render() {
      if (!this.props.isAuth) { return < Navigate to='/logine' /> }
      return < Component {...this.props} />
    }
  }

  let AuthNavigateContainerConnect = connect(mapStateToProps)(AuthNavigateContainer)
  return AuthNavigateContainerConnect;
}