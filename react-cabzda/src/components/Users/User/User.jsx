import React from 'react';
import userPhoto from '../../../axios/images/images.png';
import { NavLink } from 'react-router-dom';

let User = ({ user , ...props}) => {

    return <>
        <div>
            <div key={user.id}>
                <div>
                    <div>
                        <NavLink to={'/Profile/' + user.id}  >
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? <button disabled={props.followedProgress.some(id => id === user.id)} onClick={
                            () => { props.follow(user.id) }} > Unfolow</button>
                            : <button disabled={props.followedProgress.some(id => id === user.id)} onClick={
                                () => { props.unFollow(user.id) }} > Folow</button>}
                    </div>
                </div>
                <div >
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div> {'user.city'} </div>
                        <div> {'user.country'} </div>
                    </div>
                </div>

            </div>

            )
        </div>
    </>
}

export default User;