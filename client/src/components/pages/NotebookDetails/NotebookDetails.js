import React, {Component} from 'react' 
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; 
import NotebookService from '../../../services/notebook.service' 
import './NotebookDetails.css'  
import NotebookShopList from '../Shops/NotebookShopList';


export default class NotebookDetails extends Component{
    constructor(props){
        super(props); 

        this.state = {
            notebook: null, 
        } 

        this.NotebookService = new NotebookService();
    } 
    componentDidMount() {
        this.notebookCaracteristic(); 
       
    }    


    notebookCaracteristic = () => {
        const { id } = this.props.match.params;

        console.log(id);

        this.NotebookService.getOneNotebookCaracteristic(id)
            .then(res => {

                this.setState({
                    ...this.state,
                    notebook: res.data
                })
            })
            .catch(err => console.log(err));
    }


    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        })
    }  


  


    handleSubmit = (e) => {
        e.preventDefault();
        this.NotebookService.createComments(this.state.notebook?._id, this.state.title, this.state.description)
            .then((res) => {
                console.log("CREADO COMENTARIO")
                console.log(res.data)
                this.setState({
                    title: "",
                    description: "",
                    notebook_id: "",


                })
            })
            .catch(err => console.log(err))
    }
     
    render(){
        return(
            <>  
                <div className="caracteristicsbackground">
                <Container  >
                    <Row > 
                       <h2 className="white">Notebook´s characteristics</h2>
                        <Col md={12}>

                         {<img className="note_img" src={this.state.notebook?.image} alt="notebook"/>}

                        </Col>
                            <Col className="technicfield" md={6}>
                            {<p>Display: {this.state.notebook?.display}</p>}
                            {<p>Processor:  {this.state.notebook?.processor}</p>} 
                            {<p>CPU {this.state.notebook?.CPU}</p>} 
                            {<p>Storage Device: {this.state.notebook?.StorageDevice}</p>} 
                            {<p>Operative System: {this.state.notebook?.OperativeSystem}</p>}

                        </Col>
                       
                    </Row>

               
                </Container>     
                <NotebookShopList productId={this.props.match.params.productId} />
                </div>
            </>
        )
    }
}