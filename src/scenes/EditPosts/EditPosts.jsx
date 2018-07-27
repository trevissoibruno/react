import React from 'react'
import Input from '../../components/generic/Input/Input'
import TextArea from '../../components/generic/TextArea/TextArea'
import PostsService from '../../services/PostsService'
import Button from '../../components/generic/Button/Button'
import Alert from '../../components/generic/Alert/Alert'
import ContentShadow from '../../components/generic/ContentShadow/ContentShadow'
import EditService from '../../services/EditService'
import { Redirect } from 'react-router-dom';
import PostCard from '../Posts/PostCard/PostCard'
import Posts from '../Posts/Posts'
import GetPost from '../../services/GetPost'
import NavBar from '../../components/generic/NavBar/NavBar'
import Form from '../../components/generic/Form/Form'
const POST_SAVED_MESSAGE = 'Post Alterado com Sucesso'

export default class EditPosts extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()
        this.handleChange = this.handleChange.bind(this)
        this.onAlterar = this.onAlterar.bind(this)
        this.getPost = this.getPost.bind(this)
        this.renderAlert = this.renderAlert.bind(this)
        
    }

    componentWillMount(){
        if(this.props.match.params.id){
            this.getPost(this.props.match.params.id)  
        }
    }


    getInitialState() {
        return {
            title: '',
            description: '',
            image: '',
            text: '',          
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

    getPost(id){
        GetPost.getPosts(id).then((result) => {
            this.setState({
                id:result.data.id,
                title: result.data.title,
                description: result.data.description,
                image: result.data.image,
                text: result.data.text,
            })
   
        }).catch(resp => {
            this.setAlert('danger', resp.response.data.error)
        })
    }

    onAlterar() {
       EditService.edit(this.state).then((result) => {
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
      
        return (
            <div>
             <NavBar/>
            <div className="PostForm">
           
                <div className="PostForm--content">
                
                {this.renderAlert()}
                
                    <ContentShadow>
                    <Form  title={this.state.title}
                           description={this.state.description}
                           handleChange={this.handleChange}
                           image={this.state.image}
                           text={this.state.text}     />                                                              
                        <div className="pull-right">
                            <Button isOutline={true} classButton="primary" type="button" onClick={this.onAlterar} text="Alterar" />
                        </div>
                    </ContentShadow>
                </div>
            </div>
            </div>
        )
    }

}
