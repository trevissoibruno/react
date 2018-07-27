import React from 'react'

import { Alert } from 'reactstrap';
import NavBar from '../../components/generic/NavBar/NavBar'
export default class Home extends React.Component {

    render() {
        return <div>
           <NavBar/>
            <Alert color='primary'>
                <h1>Bem Vindo ao Meu Bloguinho</h1>
                <h2>Você pode criar, alterar, visualizar e excluir seus proprios posts.</h2>
            </Alert>
        </div>
    }

}