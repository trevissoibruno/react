import React from 'react'

import Button from '../../../components/generic/Button/Button'

import './PostCard.css'

export default class PostCard extends React.Component {

    render() {
        return <div className="card">
            <img alt="" className="PostCard-image" src={this.props.image} />
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <h6 className="card-title">{this.props.description}</h6>
                <div >
                    <Button classButton="success" isOutline={true} onClick={this.props.onClickDescriptionButton} text="Texto" />

                    <Button classButton="primary" isOutline={true} onClick={this.props.enviaParaEditar} text="Editar" />

                    <Button classButton="danger" isOutline={true} onClick={this.props.onClickDeleteButton} text="Excluir" />
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted">{this.props.footer}</small>
            </div>
        </div>
    }

}