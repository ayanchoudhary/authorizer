import React, { Component } from 'react'
import '../../styles/main.scss'

class LoginCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    onChangeId(event) {
        this.setState({ email:event.target.value })
    }

    onChangePassword(event) {
        this.setState({ password:event.target.value })
    }

    onButtonPress(event) {
        event.preventDefault()
    }

    register() {
        window.location = '/register'
    }

    render() {
        return(
            <div className='logincard'>
                <div className='logincard--signin-block'>
                    <form onSubmit={this.onButtonPress.bind(this)}>
                        <div className='logincard--heading-id'>E-mail ID</div>
                        <input className='logincard--input-id' name='id' onChange={this.onChangeId.bind(this)} required/>
                        <div className='logincard--heading-password'>Password</div>
                        <input className='logincard--input-password' name='password' type='password' onChange={this.onChangePassword.bind(this)} required/>
                        <button className='logincard--submit' type='submit'>Sign In</button>
                    </form>
                </div>
                <div className='logincard--signin-details'>
                    <div className='logincard--signin-forgotpass'>Forgot Password?</div><div className='logincard--signin-forgotpass1'>Make new one right now. </div>
                    <div><div className='logincard--register'>New to this place?</div><button className='logincard--register-button' onClick={this.register.bind(this)}>Register</button></div>
                </div>
            </div>
        )
    }
}

export default LoginCard