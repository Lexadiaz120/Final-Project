import React, { Component } from 'react'; 
import NotebookService from './../../../services/notebook.service'; 
import { Row, Container } from 'react-bootstrap'
import NotebookItem from './../NotebookPage/NotebookItem' 

 


export default class NotebookList extends Component{
    constructor(){
        super(); 
          
        this.state = {
            notebook: undefined
        } 
        this.NotebookService = new NotebookService()
    }  
     
  
    componentDidMount = () => this.getNotebookData();
   
    getNotebookData = () => { 
        this.NotebookService.getNotebooks()
         .then(res => {
              console.log(res.data);  
              this.setState({
                  ...this.state, 
                  notebook: res.data
              }, () => console.log(this.state)) 
         }) 
            .catch(err => console.log(err))
        
    } 


    displayNotebooks = () => {
        return(
            <Container>
                <Row>
                    {


                        this.state.notebook?.map(notebook => {
                            console.log(notebook.name);
                            return (
                                <NotebookItem key={notebook._id} {...notebook} />
                            )
                        })
                    }

                </Row>
            </Container>
        )
    } 
 

    


     render(){
         return(
             <div className="fielder">


                 {

                     this.displayNotebooks()

                 }

             </div>

         )
     }



        
    }