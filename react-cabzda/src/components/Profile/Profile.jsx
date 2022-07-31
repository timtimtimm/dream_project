import React from 'react';
import s from './Profile.module.css';
import Mine_postsContainer from './Mine_posts/Mine_postsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {useParams} from 'react-router-dom';

function Profile(props) {
  let {id} = useParams();

  return (
    <div >
      <ProfileInfo />
      <Mine_postsContainer id = {id} />
    </div>
  );
}
export default Profile;