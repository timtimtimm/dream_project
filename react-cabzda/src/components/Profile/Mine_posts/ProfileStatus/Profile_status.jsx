import React from 'react';
//import s from './Mine_posts.module.css';



class Profile_status extends React.Component {

  state = {
    editMode: true,
    status: this.props.status
  }
  activatEeditMode = () => {
    this.setState(
      {
        editMode: true,
      }
    )
    this.props.updateStatusUser(this.state.status);
  }

  deactivatEeditMode = () => {
    this.setState(
      {
        editMode: false,
      }
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status != this.props.status) {
      this.setState(
        { status: this.props.status }
      );
    }
  }
  changeStatus = (e) => {
    this.setState(
      { status: e.target.value }
    )

  }

  render() {
    return <>
      {this.state.editMode ?
        <div>
          <span onDoubleClick={this.deactivatEeditMode} >{this.props.status || '----'} </span>
        </div>
        : <div>
          <input autoFocus={true} value={this.state.status} onBlur={this.activatEeditMode}
            onChange={(e) => this.changeStatus(e)} />
        </div>
      }
    </>
  }
}
export default Profile_status;