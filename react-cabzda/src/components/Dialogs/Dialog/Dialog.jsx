import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div >
            <div className={s.circle}></div>
           <div className='s.item'> {props.message} </div>
        </div>
    );
}

export default Dialog;