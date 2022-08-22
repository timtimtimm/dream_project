import React from 'react';
import s from '../Mine_posts.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../../support/formControl/formControl';
import st from  '../../../../support/formControl/formControl.module.css';

const UserDataForm = ({ handleSubmit, error } ) => {

    return (
        <form onSubmit={handleSubmit} >
            <button> sendForm</button>
            { error && <div className={st.errorLogin} >{error} </div> }
            <div  >
                <div className={s.form}> <b >FullName: </b></div>
                <div className={s.form}> <Field placeholder='FullName' component={Input} name='fullName' /> </div>
            </div>
            <div  >
                <div className={s.form}> <b >aboutMe: </b></div>
                <div className={s.form}> <Field placeholder='FullName' component={Input} name='aboutMe' /> </div>
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
                <div >
                    <b> contacts:</b>
                    <div className={s.usersData}>
                        <div>
                            <div className={s.form}> <b >facebook: </b></div>
                            <div className={s.form}> <Field component={Input} name='contacts.facebook' /> </div>
                        </div>
                        <div>
                            <div className={s.form}> <b >website: </b></div>
                            <div className={s.form}> <Field component={Input} name='contacts.website' /> </div>
                        </div>
                        <div>
                            <div className={s.form}> <b >vk: </b></div>
                            <div className={s.form}> <Field component={Input} name='contacts.vk' /> </div>
                        </div>
                        <div>
                            <div className={s.form}> <b >twitter: </b></div>
                            <div className={s.form}> <Field component={Input} name='contacts.twitter' /> </div>
                        </div>
                        <div>
                            <div className={s.form}> <b >instagram: </b></div>
                            <div className={s.form}> <Field component={Input} name='contacts.instagram' /> </div>
                        </div>
                        <div>
                            <div className={s.form}> <b >youtube: </b></div>
                            <div className={s.form}> <Field component={Input} name='contacts.youtube' /> </div>
                        </div>
                        <div>
                            <div className={s.form}> <b >github: </b></div>
                            <div className={s.form}> <Field component={Input} name='contacts.github' /> </div>
                        </div>
                        <div>
                            <div className={s.form}> <b >mainLink: </b></div>
                            <div className={s.form}> <Field placeholder='FullName' component={Input} name='contacts.mainLink' /> </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    )
}

const ProfileUserDataReduxForm = reduxForm({ form: 'profileUserDataForm' })(UserDataForm);

const ProfileUserDataform = (props) => {
    const onSubmit = (formData) => {
         props.setNewUserData(formData );
    }

    return (
        <ProfileUserDataReduxForm onSubmit={onSubmit} initialValues ={props.profileUserData} />
    )


}
export default ProfileUserDataform;