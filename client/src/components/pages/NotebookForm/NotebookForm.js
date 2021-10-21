import React, { Component } from 'react'; 
import { Button, Form } from 'react-bootstrap'; 
import NotebookService from './../../../services/notebook.service'; 


export default class NotebookForm extends Component{
     state = {
         name: "Laptop", 
         shortdescription: "", 
         shop: "", 
         color: "", 
         price: "", 
         image: ""
     } 

     NotebookService = new NotebookService(); 


     handleChange = (e) => {
         const {value , name} = e.target; 
           this.setState({
               ...this.state, 
               [name]: value
           })
     } 
     handleSubmit = (e) => {
         e.preventDefault(); 
         this.NotebookService.createNotebook(this.state)
         .then(() => {
             this.setState({
                 name: "", 
                 shortdescription: "", 
                 shop: "", 
                 color: "", 
                 price: "", 
                 image: ""
             })
         })
     }  


     render(){
         return(
             <>
             <Form onSubmit={this.handleSubmit}>           
                     <Form.Group className="mb-3" controlid="name">
                         <Form.Label>Notebook name:</Form.Label>
                         <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name}></Form.Control>
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="shortdescription">
                         <Form.Label>Introduce notebook´s short description: </Form.Label>
                         <Form.Control onChange={(e) => this.handleChange(e)} name="shortdescription" value={this.state.shortdescription} type="text" placeholder="Introduce descripción" />
                     </Form.Group>


                     <Form.Group className="mb-3" controlId="color">
                         <Form.Label>Color: </Form.Label>
                         <Form.Control onChange={(e) => this.handleChange(e)} name="color" value={this.state.color} type="text" placeholder="Introduce color" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="price">
                         <Form.Label>Price: </Form.Label>
                         <Form.Control onChange={(e) => this.handleChange(e)} name="price" value={this.state.price} type="text" placeholder="Introduce price" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="image">
                         <Form.Label>Image: </Form.Label>
                         <Form.Control onChange={(e) => this.handleChange(e)} name="image" value={this.state.image} type="text" placeholder="Introduce image" />
                     </Form.Group>




                     <Button variant="primary" type="submit">
                         Create notebook
                     </Button>

             </Form>
             </>
         )
     }
}  


 