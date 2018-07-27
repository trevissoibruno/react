import React from 'react'
import PostsService from '../../services/PostsService'
import Jumbotron from '../../components/generic/Jumbotron/Jumbotron'
import Modal from '../../components/generic/Modal/Modal'
import PostCard from './PostCard/PostCard'
import './Posts.css'
import { Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import EditPosts from '../EditPosts/EditPosts'
import NotFound from '../../scenes/NotFound/NotFound'
import GetPost from '../../services/GetPost'
import Button from '../../components/generic/Button/Button'
import Input from '../../components/generic/Input/Input'
import TextArea from '../../components/generic/TextArea/TextArea'
import ContentShadow from '../../components/generic/ContentShadow/ContentShadow'
import NavBar from '../../components/generic/NavBar/NavBar'
export default class Posts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedPost: {},
            selectedPostToDelete: {},
            posts: [],
            shouldRedirectDash : false,
        }
        this.enviaParaEditar = this.enviaParaEditar.bind(this)
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
        this.onClickDescriptionButton = this.onClickDescriptionButton.bind(this)
        this.onCloseModalSelectedPost = this.onCloseModalSelectedPost.bind(this)
        this.onCloseModalSelectedPostToDelete = this.onCloseModalSelectedPostToDelete.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.goDash = this.goDash.bind(this)
    }


    

    componentDidMount() {
        this.loadPosts()
    }

    onClickDeleteButton(selectedPostToDelete) {
        this.setState({
            selectedPostToDelete
        })
    }
    onClickDescriptionButton(selectedPost) {
        this.setState({
            selectedPost
        })
    }
    deletePost(id) {
        PostsService.delete(id).then(() => {
            this.loadPosts()
        }).finally(() => {
            this.onCloseModalSelectedPostToDelete()
        })
    }

    loadPosts() {
        PostsService.myPosts().then((resp) => {
            this.setState({
                posts: resp.data.posts
            })
        })
    }

    onCloseModalSelectedPost() {
        this.setState({
            selectedPost: {}
        })
    }

    onCloseModalSelectedPostToDelete() {
        this.setState({
            selectedMovieToDelete: {}
        })
    }
    goDash() {
        this.setState({
            shouldRedirectDash: true
        })
    }

    enviaParaEditar(postID) {
       this.setState({
        postID
      })
      this.goDash()
       
    }
    renderPosts() {

       
        if (this.state.posts.length) {
            const posts = this.state.posts.map((post) => {
               return <div key={post.id} className="Posts--item">
                    <PostCard
                        image={post.image}
                        title={post.title}
                        text={post.text}
                        description={post.description}
                        
                        enviaParaEditar={() => this.enviaParaEditar(post.id)}
                        onClickDeleteButton={() => this.onClickDeleteButton(post)}
                        onClickDescriptionButton={() => this.onClickDescriptionButton(post)}
                    />
                     
                </div>
            })
            return <div className="Posts--content">
                {posts}
            </div>
        }
        return <div className="Posts--empty">
            <Jumbotron title="Você ainda não possui posts cadastrados" description="Acesse o menu de cadastro para cadastrar seus posts." />
        </div>
    }

    render() {
        <NavBar />
       
        if (this.state.shouldRedirectDash) {
            return <Redirect to={"/editForm/" + `${this.state.postID}`} />
        }
        return <div className="Posts">
            
            <Modal  show={this.state.selectedPost.text}
                text={this.state.selectedPost.text}
                title={this.state.selectedPost.title}
                onClose={this.onCloseModalSelectedPost}
                
            />
              
            <Modal show={this.state.selectedPostToDelete.text}
                text={`Deseja excluir o post ${this.state.selectedPostToDelete.title} ?`}
                title="Confirmação"
                onClose={this.onCloseModalSelectedPostToDelete}
                classButtonAction="danger"
                onClickButtonAction={() => this.deletePost(this.state.selectedPostToDelete.id)}
                textButtonAction="Excluir"
            />
            {this.renderPosts()}
           
      
        </div>
    }
}