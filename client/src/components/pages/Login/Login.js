import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.service' 
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      pwd: ""
    }
    this.authService = new AuthService()
  }

  handleInput = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, pwd } = this.state

    this.authService.login(username, pwd)
      .then(res => {
        this.props.storeUser(res.data)
        this.props.history.push("/")
      })
      .catch(err => console.log(err))
  }

  render() {
    return ( 
      <div className="backblack">
     <div className="login-page">
        <Form className="formlogin" onSubmit={this.handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="black">Username</Form.Label>
            <Form.Control name="username" value={this.state.username} onChange={this.handleInput} type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="black">Password</Form.Label>
            <Form.Control name="pwd" value={this.state.pwd} onChange={this.handleInput} type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="btn btn-login" type="submit">
            Login
          </Button>
        </Form>
      </div>
      </div>
    )
  }
}

export default Login