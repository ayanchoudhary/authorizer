import React,{ Component,Fragment } from 'react'
import UpdateApi from '../api/updateApi'
import LoginApi from '../api/loginApi'

class User extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            name:'',
            email:'',
            password:'',
            gender:'',
            mobile:'',
            change:false
        }
    }

    signout() {
        localStorage.clear()
        window.location = '/'
    }

    change() {
        if(this.state.change) {
            UpdateApi(this.state.name,this.state.email,this.state.gender,this.state.mobile).then((res) => {
                LoginApi(this.state.email,this.state.password).then((res) => {
                    localStorage.setItem('res',JSON.stringify(res.data[0]))
                    window.alert('Details successfully updated')
                    this.setState({ change:false })
                })
            })
        }
        else {
            this.setState({ change:true })
        }
    }

    onChangeName(event) {
        this.setState({ name:event.target.value })
    }

    onChangeGender(event) {
        this.setState({ gender:event.target.value })
    }

    onChangeMobile(event) {
        this.setState({ mobile:event.target.value })
    }

    cancel() {
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
        this.setState({ change:false })
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
                        Name:
                        { !this.state.change ? <span className='user--info-name_value'>{this.state.name}</span> : <input className='user--info-name_input' type='text' placeholder={this.state.name} onChange={this.onChangeName.bind(this)} /> }
                    </div>
                    <div className='user--info-email'>
                        E-Mail:
                        <span className='user--info-email_value'>{this.state.email}</span>
                    </div>
                    <div className='user--info-gender'>
                        Gender:
                        { !this.state.change ? <span className='user--info-gender_value'>{this.state.gender}</span> : <input className='user--info-gender_input' type='text' placeholder={this.state.gender} onChange={this.onChangeGender.bind(this)} /> }
                    </div>
                    <div className='user--info-mobile'>
                        Mobile:
                        { !this.state.change ? <span className='user--info-mobile_value'>{this.state.mobile}</span> : <input className='user--info-mobile_input' type='text' placeholder={this.state.mobile} onChange={this.onChangeMobile.bind(this)} /> }
                    </div>
                { !this.state.change ? <div className='user--info-change' onClick={this.change.bind(this)}>Change..</div> : (<Fragment><button className='user--info-change_button' onClick={this.change.bind(this)}>Change</button><div className='user--info-change_cancel' onClick={this.cancel.bind(this)}>Cancel</div></Fragment>) }
                </div>
            </div>
        )
    }
}

export default User
