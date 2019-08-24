import React, { Component } from 'react'
import back from '../../assets/back.svg'
import RegistrationApi from '../../api/registrationApi'
import '../../styles/main.scss'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Password: '',
            EmailID: '',
            Gender: '',
            MobileNo: ''
        }

        this.return = this.return.bind(this);
    }

    return() {
        window.location = '/'
    }

    onEmailIdChange(event) {
        this.setState({ EmailID:event.target.value })
    }

    onNameChange(event) {
        this.setState({ Name:event.target.value })
    }

    onPasswordChange(event) {
        this.setState({ Password:event.target.value })
    }

    onMobileNumChange(event) {
        this.setState({ MobileNo:event.target.value })
    }

    onGenderSelect(event) {
        this.setState({ Gender:event.target.value })
    }

    onButtonPress(event) {
        event.preventDefault()
        RegistrationApi(this.state.Name,this.state.EmailID,this.state.Password,this.state.Gender,this.state.MobileNo).then((res) => {
            if(res.success) {
                window.alert('Registration done for '+this.state.Name)
                window.location = '/'
            }
            else {
                if(res.message === 'User exists') {
                    window.alert('E-mail already registered')
                    window.location = '/'
                }
                else {
                    window.alert('Some error occurred')
                    window.location = '/'
                }
            }
        })
    }

    componentWillReceiveProps(props) {
        if(props.faceID !== this.state.FaceID) {
            this.setState({ FaceID:props.faceID })
        }
    }

    render() {
        return(
            <div className='registration'>
                <div className='registration--bar' />
                <div className='registration--page'>
                <div className='registration--back' onClick={this.return}>
                    <img className='registration--back-image' src={back} alt='back'/>
                    <span className='registration--back-text'>Back to Main Menu</span>
                </div>
                <div className='registration--form'>
                    <form onSubmit={ this.onButtonPress.bind(this) }>
                        <div className='registration--heading-name'>Name:</div>
                        <input className='registration--input-name' type='text' onChange={ this.onNameChange.bind(this) }required/>
                        <div className='registration--heading-emailid'>Email ID:</div>
                        <input className='registration--input-emailid' type='text' onChange={ this.onEmailIdChange.bind(this) }required/>
                        <div className='registration--heading-gender'>Gender:</div>
                        <input className='registration--input-gender_male' type='radio' name='gender' value='Male' onChange= {this.onGenderSelect.bind(this)} required/><span className='registration--heading-gender_male'>Male</span>
                        <input className='registration--input-gender_female' type='radio' name='gender' value='Female' onChange= {this.onGenderSelect.bind(this)} required/><span className='registration--heading-gender_female'>Female</span>
                        <input className='registration--input-gender_other' type='radio' name='gender'  value='Other' onChange= {this.onGenderSelect.bind(this)} required/><span className='registration--heading-gender_other'>Other</span>
                        <div className='registration--heading-mobile'>Mobile Number:</div>
                        <input className='registration--input-mobile' type='text' onChange={ this.onMobileNumChange.bind(this) } required/>
                        <div className='registration--heading-password'>Password:</div>
                        <input className='registration--input-password' type='password' onChange={ this.onPasswordChange.bind(this) } required/>
                        <button className='registration--button' type='submit'>Register</button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Registration