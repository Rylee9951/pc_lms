import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'
import Logo from '../images/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="wrapper">
        <img className="logo" src={Logo} alt=""/>
        <div className="top-nav">
          <NavLink exact to="/" activeClassName="selected">Dashboard</NavLink>
          <NavLink to="/attendance" activeClassName="selected">Attendance</NavLink>
          <NavLink to="/progressreports" activeClassName="selected">Progress Reports</NavLink>
          <NavLink to="/assignments" activeClassName="selected">Assignments</NavLink>
        </div>
        <p className="welcome">Welcome Ryan Lee</p>
      </div>
    )
  }
}

export default Header
