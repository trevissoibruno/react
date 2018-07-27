
import React from 'react'
import PostsService from '../../services/PostsService'
import Button from '../../components/generic/Button/Button'
import Alert from '../../components/generic/Alert/Alert'
import ContentShadow from '../../components/generic/ContentShadow/ContentShadow'
import './PostForm.css'
import { Redirect } from 'react-router-dom';
import NavBar from '../../components/generic/NavBar/NavBar'
import Form from '../../components/generic/Form/Form'
const POST_SAVED_MESSAGE = 'Filme Inserido com Sucesso'

export default class PostForm extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()
        this.handleChange = this.handleChange.bind(this)
        this.onPostRegisterButtonClick = this.onPostRegisterButtonClick.bind(this)
    }
    getInitialState() {
        return {
            title: '',
            description: '',
            image: '',
            text: '', 
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

    onPostRegisterButtonClick() {
       PostsService.create(this.state).then((result) => {
            this.setState(this.getInitialState())
            this.setAlert('success',POST_SAVED_MESSAGE)
        }).catch(resp => {
            this.setAlert('danger', resp.response.data.error)
        })
    }

    setAlert(type, message) {
        this.setState({
            alert: {
                type,
                message
            }
        })
    }

    renderAlert() {
        return this.state.alert ? <Alert classAlert={this.state.alert.type} text={this.state.alert.message} /> : undefined
    }

    render() {
        if (localStorage.getItem('token')===null) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <NavBar/>
            <div className="PostForm">
                <div className="PostForm--content">
                    <ContentShadow>
                        {this.renderAlert()}
                        <Form  title={this.state.title}
                           description={this.state.description}
                           handleChange={this.handleChange}
                           image={this.state.image}
                           text={this.state.text}  /> 
                        <div className="pull-right">
                            <Button isOutline={true} classButton="primary" type="button" onClick={this.onPostRegisterButtonClick} text="Registrar" />
                        </div>
                    </ContentShadow>
                </div>
            </div>
            </div>
        )

    }

}