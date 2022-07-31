import Users from "./Users";
import React from "react";
import { connect } from 'react-redux';
import { onFollow, onUnfollow, onSetPreloader, onTogleFollowedProgress, getUsers, follow, unFollow } from "../../redax/users-reduser";
import { getSelectedUsers, getTotalUsersCount } from '../../redax/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
       /* return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            users={this.props.users}
            onUnfollow={this.props.onUnfollow}
            onFollow={this.props.onFollow}
            preloader={this.props.preloader}
            onTogleFollowedProgress={this.props.onTogleFollowedProgress}
            followedProgress={this.props.followedProgress}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />*/
        return <Users {...this.props} onChangePage={this.onChangePage} />

    }
}

let mapStateToProps = (state) => {

    return {
        users: getSelectedUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        preloader: state.usersPage.preloader,
        followedProgress: state.usersPage.followedProgress
    }
}

export default connect(mapStateToProps, {
    onFollow, onUnfollow, onSetPreloader, onTogleFollowedProgress, getUsers, follow, unFollow
})(UsersContainer);



