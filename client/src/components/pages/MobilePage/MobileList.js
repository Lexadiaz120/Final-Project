import React, { Component } from 'react';
import MobileService from '../../../services/mobile.service';
import MobileItem from './MobileItem'; 
import {Row, Container} from 'react-bootstrap'

export default class MobileList extends Component {
    constructor() {
        super();
        this.state = {
            mobile: undefined,
        }
        this.mobileService = new MobileService();
    }

    componentDidMount = () => this.getMobileData()

    getMobileData = () => {
        this.mobileService.getMobiles()
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    mobile: res.data
                }, () => console.log(this.state))

            })
            .catch(err => console.log(err));
    }

    displayMobiles = () => {


  

                return (
                    <Container>
                        <Row> {

                    
                            this.state.mobile?.map(mobile => {
                             return (
                                 <MobileItem key={mobile._id} {...mobile} />
                             )})
                            }
                        </Row>
                       
                    </Container>
                )

         
    }



    render() {
        return (

            <div className="fielder">

                {

                    this.displayMobiles()
                }
            </div>


        )
    }
}