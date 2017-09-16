import React, { Component } from 'react';
import { graphql } from 'react-relay';

class Login extends Component {


    handleClickCancel() {
        this.refs.username.value = "";
        this.refs.password.value = "";
    }

    handleClickLogin() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;



    }

    render() {
        return (
            <div></div>
        );
    }
}


export default Login;