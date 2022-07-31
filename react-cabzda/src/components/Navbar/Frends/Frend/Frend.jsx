import React from 'react';
import s from './Frend.module.css';

const Frend = (props) => {
    return (
        <div className = {s.item} >
            <img src='https://img.icons8.com/stickers/2x/homer-simpson.png' />
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default Frend;