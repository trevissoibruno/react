import React from 'react'
import Input from '../Input/Input'
import TextArea from '../TextArea/TextArea'
export default class Form extends React.Component {

    render(){
        return(
            <div>
            <Input placeholder="Digite o titulo do post" name="title" type="text" 
            value={this.props.title} 
            handleChange={this.props.handleChange} label="Titulo" />
                       
            <Input placeholder="Digite a Descrição" name="description" type="text" 
            value={this.props.description} 
            handleChange={this.handleChange} label="Descrição" />

            <Input placeholder="Digite a url da imagem" name="image" type="text" 
            value={this.props.image} 
            handleChange={this.props.handleChange} label="Imagem" />
            
            <TextArea  placeholder="Digite Seu texto" name="text" type="text" 
            value={this.props.text} 
            handleChange={this.props.handleChange} label="Texto" />
            </div>
        );
    }


}