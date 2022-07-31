import React from 'react';
import { connect } from 'react-redux';
import Frends from './Frends';

let mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const FrendsContainer = connect(mapStateToProps, mapDispatchToProps)(Frends);

export default FrendsContainer;