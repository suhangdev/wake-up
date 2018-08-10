import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './Main.less'

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="base">
          <header>
            <nav>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </nav>
          </header>
          <div className="container">
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    )
  }
}

const HomePage = () => <div>HomePage</div>
const Login = () => <div>Login</div>
const Register = () => <div>Register</div>
const Contact = () => <div>Contact</div>

export default Main