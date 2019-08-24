import React, { Component } from 'react'
import LoginCard from '../components/landing/logincard'
import ForgotPassword from '../components/landing/forgotpassword'
import '../styles/main.scss'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:true
        }
    }

    forgotpassword() {
        this.setState({ password:false })
    }

    backhome() {
        this.setState({ password:true })
    }

    render() {
        return(
            <div className='landing'>
                <div className='landing--sidebar'>
                    <div className='landing--sidebar-heading'>Authorizer</div>
                </div>
                <div className='landing--background' />
                <div className='landing--overlay'>
                { this.state.password ? <LoginCard handlePassword={this.forgotpassword.bind(this)} /> : <ForgotPassword handlePassword={this.backhome.bind(this)} /> }
                </div>
            </div>
        )
    }
}

export default Landing 
