import React from 'react';
import s from './Mine_posts.module.css';
import New_post from './New_post/New_post';
import Post from './Post/Post';
import Profile_status_hooc from './ProfileStatus/Profile_status_hooc';
import userPhoto from '../../../axios/images/images.png';
import ProfileUserData from './ProfileUserData/ProfileUserata';
import ProfileUserDataForm from './ProfileUserData/ProfileUserataForm';

const Mine_posts = (props) => {
  let posts = props.profile.postsArr.map(p => <Post key={p.id}
    message={p.message} count={p.count} />);

  let foto;
  if (props.profileUserData && props.profileUserData.photos.small) {
    foto = props.profileUserData.photos.small;
  }
  else {
    foto = userPhoto;
  }

  const onChangeFoto = (e) => {
    if (e.target.files.length) {
      props.sendPhoto(e.target.files[0]);
    }
  }

  return (
    <div className={s.minePosts}>
      <img src={foto} alt={''} />
      {props.isOwner && <input type={'file'} onChange={onChangeFoto} />} <br/>
      {props.isOwner && <button onClick={() => props.onSetEditForm(true)} >editData </button>} <br/>
      {!props.editForm? <ProfileUserData {...props} /> : <ProfileUserDataForm setNewUserData = {props.setNewUserData} 
      profileUserData = {props.profileUserData}  />}
      <Profile_status_hooc status={props.status} updateStatusUser={props.updateStatusUser} />
      <h2>Main posts</h2>
      <New_post onAddPost={props.onAddPost} />
      {posts}
    </div>
  );
}


export default Mine_posts;