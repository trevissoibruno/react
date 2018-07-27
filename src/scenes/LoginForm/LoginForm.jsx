import React from 'react'


import Input from '../../components/generic/Input/Input'
import Button from '../../components/generic/Button/Button'
import Alert from '../../components/generic/Alert/Alert'
import { Redirect } from 'react-router-dom';
import NavBar from '../../components/generic/NavBar/NavBar'
import LoginService from '../../services/LoginService'

import './LoginForm.css'


export default class LoginForm extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()
        this.handleChange = this.handleChange.bind(this)
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this)
    }


    goHome() {
        this.setState({
            shouldRedirectHome: true
        })
    }
    getInitialState() {
        return {
            email: '',
            password: '',
            shouldRedirectHome: false,
        }
    }


    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onLoginButtonClick() {
        LoginService.login(this.state.email, this.state.password).then((result) => {
            localStorage.setItem('token',result.data.accessToken)
            localStorage.setItem('id',result.data.id)
            localStorage.setItem('name',result.data.name) 
               
            this.goHome()
        }).catch(resp => {
            this.setState({
                error: resp.response.data.error
            })
        })
    }

    renderError() {
        return this.state.error ? <Alert classAlert="danger" text={this.state.error} /> : undefined
    }
    render() {
        if (this.state.shouldRedirectHome) {
            return <Redirect to='/home' />
        }
        return <div className="fundo">
         <div className="Login">
            <div className="Login--container">
                <div className="Login--header">
                    <h3>Por Favor, faça o Login</h3>
                </div>
                
                <div className="App-content">
                {this.renderError()}
                
                <Input placeholder="Digite seu e-mail" name="email" type="text" handleChange={this.handleChange} label="Email" />
                <Input placeholder="Digite sua senha" name="password" type="password" handleChange={this.handleChange} label="Senha" />
                <div className="pull-right">
                    <Button isOutline={true} color="primary" type="button" onClick={this.onLoginButtonClick} text="Login"/>
                </div>  
                </div>
            </div>
        </div>
        </div>
    }









}