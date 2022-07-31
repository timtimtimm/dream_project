import React from 'react';
import s from './Dialogs.module.css';
import User from './User/User';
import Dialog from './Dialog/Dialog';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../../support/formControl/formControl';
import {maxLength, required } from '../../utils/validators/validators';

const Dialogs = (props) => {

    const onSubmit = (formData) => {
        props.addDialogsPostActionCreater(formData);
    }
    let usersName = props.dialogs.usersArr.map(u => <User key={u.id}
        name={u.name} id={u.id} />);
    let dialogsElems = props.dialogs.dilogsArr.map(d => <Dialog key={d.id}
        message={d.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersName}
            </div>
            <div className={s.dialog}>
                < DialogsReduxForm onSubmit={onSubmit} />
                <div className='s.item'>
                    {dialogsElems}
                </div>
            </div>
        </div>
    );
}

const maxLength50 = maxLength(50);

const DialogsForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} >
            <Field placeholder='Введите текст' component = {Textarea} name='message' validate={[required, maxLength50]} /> <br />
            <button  > add Post</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({ form: 'DialogsForm' })(DialogsForm);

export default Dialogs;