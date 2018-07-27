import React from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  import { Switch, Route, Redirect, Link } from 'react-router-dom'

export default class NavBar extends React.Component {

    render(){
        return(
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/home">Meu Bloguinho</NavbarBrand>
            <NavbarToggler />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav--link home" to='/home'>Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav--link" to='/dashboard' >Dashboard</Link>
              </NavItem>
              <NavItem>
                <Link className="nav--link" to='/PostForm' >Cadastro</Link>
              </NavItem>
              <li onClick={this.onClickLogoutButton}>
                <Link className="nav--link" to='/' >Logout</Link>
              </li>
            </Nav>
          </Navbar>
        );
    }
}