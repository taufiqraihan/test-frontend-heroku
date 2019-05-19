import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
    render () {
        // localStorage.removeItem('token')
        localStorage.clear('token')
        return (
            window.location = "/login"
        )
    }
}

export default Logout
