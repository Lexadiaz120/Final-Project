import React, { Component } from 'react';
import MobileService from './../../../services/mobile.service';
import { Container, Row, Col } from 'react-bootstrap';
import Shoplist from '../Shops/Shoplist';


export default class MobileDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobile: null,
        }
        this.MobileService = new MobileService();
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.MobileService.getOneMobileCaracteristic(id)
            .then(res => {
                this.setState({
                    ...this.state,
                    mobile: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
             

                <Container>
                    <Row >
                        <Col md={6}>

                            {<img src={this.state.mobile?.mobileimg} alt="mobile"></img>}
                            {<h2>{this.state.mobile?.mobilename}</h2>}
                        </Col>
                        <Col md={6}>
                            <h2> Caracteristics of mobile: </h2>
                            <br />
                            {/* {Object.keys(this.state).map(el => <p>{el}: {this.state[el]}</p>)} */}
                            <h4>Hardware part:</h4>
                            {<p>Display is: {this.state.mobile?.display}</p>}
                            {<p>Description is : {this.state.mobile?.description}</p>}
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

                        <Col md={3}>
                            <h5>Main Camera :</h5>

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
                        <Col md={3}>
                            <h5> Front Camera :</h5>


                            {<p> FormFactor: {this.state.mobile?.frontCamera.FormFactor}</p>}
                            {<p>MainObjective: {this.state.mobile?.frontCamera.mainObjective}</p>}
                            {<p> ApertureRatio: {this.state.mobile?.frontCamera.ApertureRatio}</p>}
                            {<p>  ViewingAngel: {this.state.mobile?.frontCamera.ViewingAngel}</p>}
                            {<p>    fullHdShooting: {this.state.mobile?.frontCamera.fullHdShooting}</p>}

                        </Col>
                        <Col md={3}>

                            <h5> CommunicationsandPorts</h5>

                            {<p> Communcationstandarts: {this.state.mobile?.CommunicationsandPorts.Communcationstandarts}</p>}
                            {<p> Communications: {this.state.mobile?.CommunicationsandPorts.Communications}</p>}
                            {<p>  ConnectionPorts: {this.state.mobile?.CommunicationsandPorts.ConnectionPorts}</p>}

                        </Col>
                        <Col md={3}>
                            <h5>FunctionAndNavigation</h5>

                            {<p>FeaturesAndCapabilities: {this.state.mobile?.FunctionAndNavigation.FeaturesAndCapabilities}</p>}
                            {<p> Navigation: {this.state.mobile?.FunctionAndNavigation.Navigation}</p>}

                        </Col>
                        <Col md={3}>
                            <h5>Power</h5>
                            {<p>BatteryCapacity: {this.state.mobile?.Power.BatteryCapacity}</p>}
                            {<p> FastChargingTechnology : {this.state.mobile?.Power.FastChargingTechnology}</p>}
                            {<p>ChargingPower: {this.state.mobile?.Power.ChargingPower}</p>}
                            {<p>ChargingPower: {this.state.mobile?.Power.ChargingPower}</p>}
                            {<p>CharginTime: {this.state.mobile?.Power.CharginTime}</p>}

                        </Col>
                        <Col md={3}>

                            <h5>General</h5>

                            {<p> LuiqidColling: {this.state.mobile?.General.LuiqidColling}</p>}
                            {<p>  FrameCoverMaterial: {this.state.mobile?.General.FrameCoverMaterial}</p>}
                            {<p>Backover: {this.state.mobile?.General.Backcover}</p>}
                            {<p>Equipment: {this.state.mobile?.General.Equipment}</p>}
                            {<p> Dimensions: {this.state.mobile?.General.Dimensions}</p>}
                            {<p>  Weight: {this.state.mobile?.General.Weight}</p>}
                            {<p>Official web page: {this.state.mobile?.General.oficialwebPage}</p>}

                        </Col>
                    </Row>  

                    <Shoplist productId={this.props.match.params.productId} />
                </Container>
            </>
        )
    }
}




