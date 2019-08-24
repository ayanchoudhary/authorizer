import React, { Component } from 'react'
import PasswordApi from '../../api/passwordApi'
import '../../styles/main.scss'

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            repassword:''
        }
    }

    onChangeId(event) {
        this.setState({ email:event.target.value })
    }

    onChangePassword(event) {
        this.setState({ password:event.target.value })
    }

    onChangeRePassword(event) {
        this.setState({ repassword:event.target.value })
    }

    onButtonPress(event) {
        event.preventDefault()
        if(this.state.password === this.state.repassword) {
            PasswordApi(this.state.email,this.state.password).then((res) => {
                if(res.success) {
                    window.alert('Password changed successfully')
                    window.location = '/'
                }
                else if(res.message === 'User does not exist') {
                    window.alert('User does not exist')
                    window.location = '/'
                }
                else {
                    window.alert('Something went wrong. Please try again.')
                    window.location = '/'
                }
            })
        }

        else {
            window.alert("Password don't match")
        }
    }

    register() {
        window.location = '/register'
    }

    render() {
        return(
            <div className='forgotpassword'>
                <div className='forgotpassword--form-block'>
                    <form onSubmit={this.onButtonPress.bind(this)}>
                        <div className='forgotpassword--heading-id'>E-mail ID</div>
                        <input className='forgotpassword--input-id' name='id' onChange={this.onChangeId.bind(this)} required/>
                        <div className='forgotpassword--heading-password'>Password</div>
                        <input className='forgotpassword--input-password' name='password' type='password' onChange={this.onChangePassword.bind(this)} required/>
                        <div className='forgotpassword--heading-repassword'>Re-Enter Password</div>
                        <input className='forgotpassword--input-repassword' name='password' type='password' onChange={this.onChangeRePassword.bind(this)} required/>
                        <button className='forgotpassword--submit' type='submit'>Reset Password</button>
                    </form>
                </div>
                <div className='forgotpassword--form-details'>
                    <div className='forgotpassword--form-back' onClick={this.props.handlePassword}>Back to Home</div><div className='forgotpassword--form-backdesc'>Did you remember your password?</div>
                    <div><div className='forgotpassword--register'>New to this place?</div><button className='forgotpassword--register-button' onClick={this.register.bind(this)}>Register</button></div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword