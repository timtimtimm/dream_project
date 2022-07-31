import React, { useState, useEffect } from 'react';

const Profile_status_hooc = (props) => {

  let [editMode, setEditMode] = useState(true);
  let [status, setStatus] = useState(props.status);

  useEffect(
    () => { setStatus(props.status) }, [props.status]
  );

  const activatEeditMode = () => {
    setEditMode(true);
    props.updateStatusUser(status);
  }

  const deactivatEeditMode = () => {
    setEditMode(false);
  }

  const changeStatus = (e) => {
    setStatus(e.target.value);
  }

  return <>
    {editMode ?
      <div>
        <span onDoubleClick={deactivatEeditMode} >{props.status || '----'} </span>
      </div>
      : <div>
        <input autoFocus={true} value={status} onBlur={activatEeditMode}
          onChange={(e) => changeStatus(e)} />
      </div>
    }
  </>
}

export default Profile_status_hooc;