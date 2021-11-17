import React, { Component } from 'react'; 
import NotebookService from './../../../services/notebook.service'; 
import { Row, Container, Col, Button } from 'react-bootstrap' 
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import Rating from '../Rating/Rating';

 


export default class NotebookList extends Component{
    constructor(){
        super(); 
          
        this.state = {
            notebook: undefined
        } 
        this.NotebookService = new NotebookService()
    }  
     
  

    componentDidMount() {
        this.getNotebookData()
        toast.configure()
    }
   
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


    notebookItem = ({ name, link, shortdescription, color, price, image, notebook, _id, rating }) => {
        return (
            <>
                {_id &&
                    <>



                        <Col className="mt-20 noteitem" md={4}>

                            <img className="notebookimage" src={image} alt="phone"></img>
                            <p className="title" >{name}</p>
                            <p className="shortdescription">  <br />{shortdescription}<br /> </p>
                            <p className="color">Color: {color}</p>
                            <p className="price">Precio: {"desde" + " " + price + " " + "€"}</p>
                        <Rating value={rating} />
                            {notebook && <Link className="btn btn-dark inform" to={`/caracteristicsnotebook/${_id}/${notebook._id}`}>View information</Link>}
                        <Button className="btn-dark mt-20" onClick={() => this.addtoFavorites(_id)}   >Add to favs <img className="favimg" alt="img" src="https://cdn-icons.flaticon.com/png/128/2550/premium/2550361.png?token=exp=1636541158~hmac=a45e5e74685943cc1137bc7c843a6ff0"></img> </Button>
                        </Col>


                    </>
                }

            </>
        )
    } 


    addtoFavorites = (id) => {
        this.NotebookService.addtoFavorites(id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    favorites: res.data
                })
            })

        toast('Succesfully added to favorites')

    }




    displayNotebooks = () => {
        return(
            <Container>
                <Row>
                    {


                        this.state.notebook?.map(notebook => {
                            console.log(notebook.name);
                            return (
                                this.notebookItem({ ...notebook })
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