import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Home from './scenes/Home/Home'
import Dashboard from './scenes/Dashboard/Dashboard'
import NotFound from './scenes/NotFound/NotFound'
import LoginForm from './scenes/LoginForm/LoginForm'
import PostForm from './scenes/PostForm/PostForm'
import LoginService from './services/LoginService'
import Button from './components/generic/Button/Button'
import EditPosts from './scenes/EditPosts/EditPosts'
class App extends Component {
  constructor() {
    super()
    this.onClickLogoutButton = this.onClickLogoutButton.bind(this)
    this.state = {}
  }
  onClickLogoutButton() {
    LoginService.logout().then(() => {
      return <Redirect to={"/"} />
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/PostForm" exact component={PostForm} />
          <Route path="/404" component={NotFound} />
          <Route path="/" exact component={LoginForm} />
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard/:id?" component={Dashboard} />
          <Route path="/editForm/:id?" component={EditPosts} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;