import React, { Component } from 'react'
import LoginCard from '../components/landing/logincard'
import cover from '../assets/cover.jpg'
import '../styles/main.scss'

class Landing extends Component {
    render() {
        return(
            <div className='landing'>
                <div className='landing--sidebar'>
                    <div className='landing--sidebar-heading'>Authorizer</div>
                </div>
                <div className='landing--background' />
                <div className='landing--overlay'>
                    <LoginCard />
                </div>
            </div>
        )
    }
}

export default Landing 
