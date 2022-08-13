import React from 'react';
import s from './Mine_posts.module.css';
import New_post from './New_post/New_post';
import Post from './Post/Post';
import Profile_status_hooc from './ProfileStatus/Profile_status_hooc';
import userPhoto from '../../../axios/images/images.png';

const Mine_posts = React.memo((props) => {
  let posts = props.profile.postsArr.map(p => <Post key={p.id}
    message={p.message} count={p.count} />);
    let foto;
    if( props.profileUserData && props.profileUserData.photos.small){
foto = props.profileUserData.photos.small;
    }
    else{
      foto =userPhoto;
    }
  return (
  
    <div className={s.minePosts}>

<img src={ foto } alt= {''} /> 

      <Profile_status_hooc status={props.status} updateStatusUser={props.updateStatusUser} />
      <h2>Main posts</h2>
      <New_post onAddPost={props.onAddPost} />
      {posts}
    </div>
  );
}
);

export default Mine_posts;