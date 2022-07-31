import React from 'react';
import s from './Frends.module.css';
import Frend from './Frend/Frend';

const Frends = (props) => {
    let FrendsList = props.navbar.frends.map(f => {
        return <Frend name={f.name} key = {f.id} />
    })
    return (
        <div className={s.frends}>
            <h2> Frends </h2>
            <div className={s.area}>
                {FrendsList}
            </div>
        </div>
    );
}

export default Frends;