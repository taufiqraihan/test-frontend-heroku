import React, { Component } from 'react';
import Axios from '../axios'

class Login extends Component {
  constructor () {
    super ()
    this.state = {
      Username: '',
      password: '',
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    const {Username, password} = this.state
    Axios.post('/users/login', { Username, password })
      .then( res => {
        console.log(res.data.data.token)
        const token = res.data.data.token
        localStorage.setItem('token', token)
        // this.props.history.push('/siswa')
        window.location = "/siswa"
      }).catch(err => {
        console.log(err)
        this.setState({message :' pastikan username dan password benar'})
      })
      e.preventDefault()
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        {
          this.state.message !== "" && (
            <div class="alert alert-danger" role='alert'>
              {this.state.message}
            </div>
          )
        }

        <form onSubmit={this.handleSubmit}>
          <div className="form,-group">
            <label>Username</label>
            <input
            className="form-control"
            name="Username"
            value={this.state.Username}
            onChange={this.handleChange}
            />
            <label>Password</label>
          </div>
          <div className="form,-group">
            <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
            <br />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
