import Dialogs from './Dialogs';
import { addDialogsPostActionCreater } from './../../redax/dialogs-reduser';
import { connect } from 'react-redux';
import { authNavigate } from '../Hoc/AuthNavigate';
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

const DialogsContainer = compose(authNavigate, connect(mapStateToProps, { addDialogsPostActionCreater }))(Dialogs);

export default DialogsContainer;