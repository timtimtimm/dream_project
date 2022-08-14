import React from 'react';

const ContactsUser = (props) => {
    return (
        <div>
<b>{props.name}:</b> {props.text}
        </div>
    )
}

export default ContactsUser;