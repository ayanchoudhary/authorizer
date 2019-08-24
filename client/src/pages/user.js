import React,{ Component } from 'react'

class User extends Component {
    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem('res')))
    }

    render() {
        return(
            <div className='user'>

            </div>
        )
    }
}

export default User
