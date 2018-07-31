import React, {PureComponent} from 'react'
import {ProfileComponent} from './../Components/ProfileComponent';
import {connect} from 'react-redux';
class Profile extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <ProfileComponent {...this.props}/>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state=>({user: state.UserAuthentication.user, isAuth: state.UserAuthentication.isAuth});

export default connect(mapStateToProps)(Profile);