import React, {Component} from 'react' 
import {Button, Form} from 'react-bootstrap' 
import NotebookService from '../../../services/notebook.service' 


export default class CaracteristicNotebookForm extends Component{
    state = { 
        id: "", 
        display: "",  
        processor: "", 
        CPU: "", 
        StorageDevice: "", 
        OperativeSystem: "", 
        Laptopweight: "", 
        image: ""
    } 
    NotebookService = new NotebookService() 

    handleChange = (e) => {
        const { value, name } = e.target; 

        this.setState({
            ...this.state, 
            [name]: value
        })
    } 

    handleSumbit = (e) => {
        e.preventDefault(); 
        this.NotebookService.CreateCaracteristics(this.state.id , this.state.display,  this.state.processor, this.state.CPU, this.state.StorageDevice, this.state.OperativeSystem, this.state.Laptopweight, this.state.image)
         .then(()=> {
             this.setState({ 
                 id: "",
                 display: "",  
                 processor: "",  
                 CPU: "", 
                 StorageDevice: "", 
                 OperativeSystem: "", 
                 Laptopweight:  "", 
                 image: ""
             })
         })
    }

    render(){
        return( 
            <> 

            <Form onSubmit={this.handleSumbit}> 
                    <Form.Group className="mb-3" controlid="id">
                        <Form.Label>Id:</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="id" value={this.state.id}></Form.Control>
                    </Form.Group>
                <Form.Group className="mb-3" controlid="display">
                    <Form.Label>Display:</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="display" value={this.state.display}></Form.Control>
                </Form.Group>
               
                    <Form.Group className="mb-3" controlid="processor">
                        <Form.Label>processor:</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="processor" value={this.state.processor}></Form.Control>
                    </Form.Group> 

                    <Form.Group className="mb-3" controlid="CPU">
                        <Form.Label>CPU:</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="CPU" value={this.state.CPU}></Form.Control>
                    </Form.Group> 

                    <Form.Group className="mb-3" controlid="StorageDevice">
                        <Form.Label> 
                            StorageDevice
                        </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="StorageDevice" value={this.state.StorageDevice}></Form.Control>
                    </Form.Group> 

                    <Form.Group className="mb-3" controlid="OperativeSystem">
                        <Form.Label>
                            OperativeSystem
                        </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="OperativeSystem" value={this.state.OperativeSystem}></Form.Control>
                    </Form.Group>
                    

                    <Form.Group className="mb-3" controlid="Laptopweight">
                        <Form.Label>
                            Laptopweight
                        </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Laptopweight" value={this.state.Laptopweight}></Form.Control>
                    </Form.Group> 

                    <Form.Group className="mb-3" controlid="image">
                        <Form.Label>
                           Image
                        </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="image" value={this.state.image}></Form.Control>
                    </Form.Group>

            
                    <Button variant="primary" type="submit">
                        Create notebook caracteristics
                    </Button>
               
                </Form> 
            </>

        )
    }
}