import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/i?id=c87a170221b588903c8b346cca6dd100-5707839-images-thumbs&n=13' />
      {props.message}
      <div className={s.like}>
        like {props.count}
      </div>
    </div>
  );
}

export default Post;