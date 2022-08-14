import React from 'react';
import s from '../Mine_posts.module.css';
import ContactsUser from './ContactsUser';

const ProfileUserData = (props) => {
    let obj = props.profileUserData.contacts;
    let arrContacts = [];
    for (let key in obj) {
arrContacts.push( <ContactsUser key = {key} name = {key} text = {obj[key]} />)
    }
    return (
        <div className={s.usersData} >
<div>
    <b>FullName:</b> {props.profileUserData.fullName}
</div>
<div>
    <b>lookingForAJob:</b> {props.profileUserData.lookingForAJob? 'yes' : 'no'}
</div>
<div>
    <b>lookingForAJobDescription:</b> {props.profileUserData.lookingForAJobDescription}
</div>
<div>
    <b>contacts:</b> <div className={s.usersData} >{ arrContacts}</div> 
</div>
        </div>
    )
}

export default ProfileUserData;