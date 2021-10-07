import React, { Component } from 'react'
import MobileService from '../../../services/mobile.service'
import { Row, Container } from 'react-bootstrap'
import ShopItem from './ShopItem'




export default class Shoplist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shops: undefined
        }
        this.MobileService = new MobileService();
    } 

    


    componentDidMount = () => this.getShopData()


    getShopData = () => {
        this.MobileService.getShops(this.props.productId)
            .then(res => {
                console.log('aaaaaaaaaaaaaaaaaaaaaa', res.data);
                this.setState({
                    shops: res.data.products
                })
            })
            .catch(err => console.log(err))
    }



    render = () => {

        return (
            <>
                {
                    this.state.shops ?
                        this.state.shops?.map(shop => {
                            return (
                                <ShopItem  {...shop} />
                            )
                        })
                        :
                        <p>Loading...</p>
                }
            </>
        )
    }


}

