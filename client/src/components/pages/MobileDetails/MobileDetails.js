import React, { Component } from 'react';
import MobileService from './../../../services/mobile.service';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Shoplist from '../Shops/Shoplist';
import './MobileDetails.css'



export default class MobileDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: null,
            title: "",
            description: "",  
            user: "",  
            photo: ""
        }
        this.MobileService = new MobileService();

    }

    componentDidMount() { 

        this.refreshComments();
        this.mobileCaracteristics();

    }
     


 mobileCaracteristics = () => {
     const { id } = this.props.match.params;  
     console.log(id);

     this.MobileService.getOneMobileCaracteristic(id)
         .then(res => {
             console.log(res.data)

             this.setState({
                 ...this.state,
                 mobile: res.data
             })
         })
         .catch(err => console.log(err));
 } 

 refreshComments = () => {
      const {id} = this.props.match.params;
     this.MobileService.getComments(id) 
         .then(res => {
             console.log(res.data)
             this.setState({
                 ...this.state,
                 note: res.data
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
        this.MobileService.createComments(this.state.mobile?._id, this.state.title, this.state.description)
            .then((res) => {
                console.log("CREADO COMENTARIO")
                console.log(res.data)
                this.setState({
                    title: "",
                    description: "", 
                    mobile_id: "", 
                    

                })
            })
            .catch(err => console.log(err))
    }  




    deleteComments = (id) => {
         this.MobileService.deleteComments(id)
             .then(res => {
                 console.log(res.data)

                 this.setState({
                     ...this.state,
                     comment: res.data
                 })
             })
             .catch(err => console.log(err));
    }

  

    render() {
        return (
            <>
             
            <div className="caracteristicsbackground">
                <Container  >
                    <Row >
                        <Col  md={6}>



                            {<img className="mob-foto" src={this.state.mobile?.mobileimg} alt="mob" />}

                        </Col>
                        <Col className="technicfield" md={6}>
                            <h1 > Caracteristics of mobile: </h1>
                            <br />
                            {/* {Object.keys(this.state).map(el => <p>{el}: {this.state[el]}</p>)} */}
                            <h4 >Hardware part:</h4>
                            {<p >Display is: {this.state.mobile?.display}</p>}
                            {<p >Description is : {this.state.mobile?.description}</p>}
                            {<p>Operative system is of mobile is {this.state.mobile?.Hardwarepart.OperativeSistem}</p>}
                            {<p>Processor model is {this.state.mobile?.Hardwarepart.processormodel}</p>}
                            {<p> CPUfrequency is : {this.state.mobile?.Hardwarepart.CPUfrequency}</p>}
                            {<p>GraphicProcessor is {this.state.mobile?.Hardwarepart.GraphicProcessor}</p>}
                            {<p>  RAM is : {this.state.mobile?.Hardwarepart.GraphicProcessor}</p>}
                            {<p>    BuiltMemory : {this.state.mobile?.Hardwarepart.BuiltMemory}</p>}
                            {<p>    memorySpecification : {this.state.mobile?.Hardwarepart.memorySpecification}</p>}
                            {<p>  MemoryCardSlot is : {this.state.mobile?.Hardwarepart.MemoryCardSlot}</p>}
                            {<p>  cartNumber is {this.state.mobile?.Hardwarepart.cartNumber}</p>}
                            {<p>Simtype is {this.state.mobile?.Hardwarepart.simType}</p>}

                        </Col>

                        <Col className="technicfield" md={6}>
                            <h4>Main Camera :</h4>

                            {<p> Objective numbers {this.state.mobile?.mainCamera.ObjectivesNumber}</p>}
                            {<p>Main Objective: {this.state.mobile?.mainCamera.mainObjective}</p>}
                            {<p> Ultrawidelenth : {this.state.mobile?.mainCamera.ultrawidelenth}</p>}
                            {<p> Ultrawidelenth : {this.state.mobile?.mainCamera.ultrawidelenth}</p>}
                            {<p> Auxillarylens : {this.state.mobile?.mainCamera.Auxillarylens}</p>}
                            {<p>  Macrolens : {this.state.mobile?.mainCamera.Macrolens}</p>}
                            {<p>    Slowmo : {this.state.mobile?.mainCamera.Slowmo}</p>}
                            {<p>   imageStabilization: {this.state.mobile?.mainCamera.imageStabilization}</p>}
                            {<p>    Flash: {this.state.mobile?.mainCamera.Flash}</p>}

                        </Col>
                    </Row>

                    <Row >
                            <Col className="technicfield"  md={6}>
                            <h4> Front Camera :</h4>


                            {<p> FormFactor: {this.state.mobile?.frontCamera.FormFactor}</p>}
                            {<p>MainObjective: {this.state.mobile?.frontCamera.mainObjective}</p>}
                            {<p> ApertureRatio: {this.state.mobile?.frontCamera.ApertureRatio}</p>}
                            {<p>  ViewingAngel: {this.state.mobile?.frontCamera.ViewingAngel}</p>}
                            {<p>    fullHdShooting: {this.state.mobile?.frontCamera.fullHdShooting}</p>}

                        </Col>
                            <Col className="technicfield" md={6}>

                            <h4> CommunicationsandPorts</h4>

                            {<p> Communcationstandarts: {this.state.mobile?.CommunicationsandPorts.Communcationstandarts}</p>}
                            {<p> Communications: {this.state.mobile?.CommunicationsandPorts.Communications}</p>}
                            {<p>  ConnectionPorts: {this.state.mobile?.CommunicationsandPorts.ConnectionPorts}</p>}

                        </Col>
                            <Col className="technicfield" md={6}>
                            <h4>FunctionAndNavigation</h4>

                            {<p>FeaturesAndCapabilities: {this.state.mobile?.FunctionAndNavigation.FeaturesAndCapabilities}</p>}
                            {<p> Navigation: {this.state.mobile?.FunctionAndNavigation.Navigation}</p>}

                        </Col>
                            <Col className="technicfield" md={6}>
                            <h4>Power</h4>
                            {<p>BatteryCapacity: {this.state.mobile?.Power.BatteryCapacity}</p>}
                            {<p> FastChargingTechnology : {this.state.mobile?.Power.FastChargingTechnology}</p>}
                            {<p>ChargingPower: {this.state.mobile?.Power.ChargingPower}</p>}
                            {<p>ChargingPower: {this.state.mobile?.Power.ChargingPower}</p>}
                            {<p>CharginTime: {this.state.mobile?.Power.CharginTime}</p>}

                        </Col>
                            <Col className="technicfield" md={6}>

                            <h4>General</h4>

                            {<p> LuiqidColling: {this.state.mobile?.General.LuiqidColling}</p>}
                            {<p>  FrameCoverMaterial: {this.state.mobile?.General.FrameCoverMaterial}</p>}
                            {<p>Backover: {this.state.mobile?.General.Backcover}</p>}
                            {<p>Equipment: {this.state.mobile?.General.Equipment}</p>}
                            {<p> Dimensions: {this.state.mobile?.General.Dimensions}</p>}
                            {<p>  Weight: {this.state.mobile?.General.Weight}</p>}
                            {<p>Official web page: {this.state.mobile?.General.oficialwebPage}</p>}

                        </Col>


                    </Row>
                    <h2 className="text-center shoptitle">Shoplist </h2>
                    <Shoplist className="ml-50" productId={this.props.match.params.productId} />

                     <h3 className="mt-20 text-center commentitle">Leave your comment...</h3>
                    <Form className="commentform"  onSubmit={this.handleSubmit}>
                       
                        <Form.Group className="mb-3" controlId="description">
                                <Form.Label className="text-white"> Your comment here </Form.Label>
                            <Form.Control as="textarea" rows={3}  onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder ="Introduce description" />
                        </Form.Group> 
                    

                        <Form.Group className="mb-3 productid" controlId="id">
                            <Form.Label> Product id </Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="id" className="bg-black" value={this.state.mobile?._id} type="text" placeholder="Introduce description" />
                        </Form.Group>
                        <Button className="commentbutton" onClick={this.refreshComments()}  variant="primary" type="submit">
                            Create comments
                        </Button>
                    </Form>
                     
                   
                    <h5   className="text-center commentitle">Comments </h5> 

                    {
                        this.state.note?.comments.map(comment => {    
                            console.log(comment.user)
                           
                           
                            return( 
                                <>       
                                
                                <div className="comments"> 
                                        <img className="commments_img" src={ comment.user[0] } alt="imagephoto"></img>
                                      
                                    <div className="text">
                                <p className="username">{comment.user[1]}</p>    
                                 <hr/>
                                <p className="userrewiew">{comment.description}</p> 
                                        </div> 
                                    </div>  
                                    <Button className="block-center" onClick={() => this.deleteComments(comment._id)}>Delete comment</Button>
                            
                                   
                                   
                               
                                    
                
                                </>
                            ) 
                        })
                    } 
            
                </Container>  
                </div>

            </>
        )
    }
}




