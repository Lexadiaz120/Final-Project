import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import MobileService from '../../../services/mobile.service';
 

export default class MobileForm extends Component {
    state = {
        name: "",
        shortdescription: "",
        shop: "",
        color: "",
        price: "",
        image: "",
    }


    MobileService = new MobileService();

    handleChange = (e) => {
        const { value, name } = e.target;

            this.setState({
                ...this.state,
                [name]: value
            })
    }


    handleSumbit = (e) => {
        e.preventDefault();

        this.MobileService.createMobile(this.state)
            .then(() => {
                this.setState({
                    name: "",
                    shortdescription: "",
                    color: "",
                    price: "", 
                    image: "",   
                })
            })

    }


    render() {
        return (
            <>
                <Form onSubmit={this.handleSumbit}>
                    <Form.Group className="mb-3" controlid="name">
                        <Form.Label>Mobile name:</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name}></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shortdescription">
                        <Form.Label>Introduce mobile's short description: </Form.Label>
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
                        Create mobile
                    </Button>
                </Form>
            </>
        )
    }
}