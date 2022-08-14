import React from 'react';
import s from '../Mine_posts.module.css';
//import ContactsUser from './ContactsUser';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../../support/formControl/formControl';
//import { required } from '../../utils/validators/validators';
//import { Navigate } from "react-router-dom";
//import s from '../../support/formControl/formControl.module.css';

const UserDataForm = ({ handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit} >
            <button> sendForm</button>
            <div  >
                <div className={s.form}> <b >FullName: </b></div>
                <div className={s.form}> <Field placeholder='FullName' component={Input} name='fullName' className={s.form} /> </div>

            </div>
            <div>
                <div className={s.form}> <b >lookingForAJob: </b></div>
                <div className={s.form}> <Field placeholder='lookingForAJob' component={Input}
                    name='lookingForAJob' type={'checkbox'} /> </div>
            </div>
            <div>
                 <b >lookingForAJobDescription: </b>
             <Field placeholder='lookingForAJobDescription' component={Textarea} name='lookingForAJobDescription' />
                
            </div>
            <div>
                <div className={s.form}> <b >contacts:</b></div>
                <div className={s.form}> <Field placeholder='contacts' component={Input} name='contacts' /> </div>

            </div>
        </form>
    )
}

const ProfileUserDataReduxForm = reduxForm({ form: 'profileUserDataForm' })(UserDataForm);

const ProfileUserDataform = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        // props.setNewUserData(formData );
    }

    return (
        <ProfileUserDataReduxForm onSubmit={onSubmit} />
    )


}
export default ProfileUserDataform;