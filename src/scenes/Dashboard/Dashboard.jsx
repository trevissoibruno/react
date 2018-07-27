import React from 'react'

import { Alert, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Posts from '../Posts/Posts'
import './Dashboard.css'
import Loading from '../../components/generic/Loading/Loading'
import NavBar from '../../components/generic/NavBar/NavBar'

export default class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            loading:true
        }
        
    }


    componentWillMount() {
        setTimeout(() => {
          this.setState({ loading: false })
        }, 3000)
      }


    renderContent() {
       
           return <Posts />
    }
    renderPosts() {
        if (localStorage.getItem('token')===null) {
            return <Redirect to='/' />
        }
      

        return  <div className="Dashboard--content">
        <NavBar />
        {this.renderContent()}
    </div>
    }

    render() {
        return (
          <div>
            <Loading showLoader={this.state.loading}/>
            {this.renderPosts()}
          </div>
        );
      }

    
       
    

}