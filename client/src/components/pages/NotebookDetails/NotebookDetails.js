import React, {Component} from 'react' 
import { Container, Row, Col } from 'react-bootstrap'; 
import NotebookService from '../../../services/notebook.service' 
import './NotebookDetails.css'  
import NotebookShopList from '../Shops/NotebookShopList';


export default class NotebookDetails extends Component{
    constructor(props){
        super(props); 

        this.state = {
            notebook: undefined
        } 

        this.NotebookService = new NotebookService();
    } 
    componentDidMount() {
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
     
    render(){
        return(
            <> 
                <Container  >
                    <Row > 
                       <h2>Notebook´s characteristics</h2>
                        <Col md={12}>

                         {<img className="note_img" src={this.state.notebook?.image} alt="notebook"/>}

                        </Col>
                        <Col md={6}>
                            {<p>Display: {this.state.notebook?.display}</p>}
                            {<p>Processor:  {this.state.notebook?.processor}</p>} 
                            {<p>CPU {this.state.notebook?.CPU}</p>} 
                            {<p>Storage Device: {this.state.notebook?.StorageDevice}</p>} 
                            {<p>Operative System: {this.state.notebook?.OperativeSystem}</p>}

                        </Col>

                        <Col md={3}> 
                     
                           
                        </Col>
                    </Row>

                    <Row >
                        <Col md={3}>
                           

                        </Col>
                        <Col md={3}>

                          

                        </Col>
                        <Col md={3}>
                            

                        </Col>
                        <Col md={3}>
                           

                        </Col>
                        <Col md={3}>

                        </Col>
                    </Row>

               
                </Container>    
                <NotebookShopList productId={this.props.match.params.productId} />
            </>
        )
    }
}