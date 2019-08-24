import React,{ Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            name:'',
            email:'',
            password:'',
            gender:'',
            mobile:''
        }
    }

    signout() {
        localStorage.clear()
        window.location = '/'
    }

    componentWillMount() {
        const res = JSON.parse(localStorage.getItem('res'))
        if(!localStorage.getItem('success')) {
            window.location = '/'
        }
        else {
            this.setState({
                name:res.name,
                email:res.email,
                password:res.password,
                gender:res.gender,
                mobile:res.mobile
            })
        }
    }

    render() {
        return(
            <div className='user'>
                <div className='user--sidebar' />
                <button className='user--signout' onClick={this.signout.bind(this)}>Sign Out</button>
                <div className='user--info'>
                    <div className='user--info-name'>
                        <span className='user--info-name_heading'>Name: </span>
                        <span className='user--info-name_value'>{this.state.name}</span>
                    </div>
                    <div className='user--info-email'>
                        <span className='user--info-email_heading'>E-Mail: </span>
                        <span className='user--info-email_value'>{this.state.email}</span>
                    </div>
                    <div className='user--info-gender'>
                        <span className='user--info-gender_heading'>Gender: </span>
                        <span className='user--info-gender_value'>{this.state.gender}</span>
                    </div>
                    <div className='user--info-mobile'>
                        <span className='user--info-mobile_heading'>Mobile: </span>
                        <span className='user--info-mobile_value'>{this.state.mobile}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
