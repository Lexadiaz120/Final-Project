import React, {Component} from 'react';  
import './Search.css'


class Search extends Component {
    constructor(props){
        super(props); 
        this.state = {
            text: ""
        }
    } 
    handleChange = (e ) => {
        const {value, name} = e.target; 
        this.setState({
            ...this.setState, 
            [name]: value
        })
        this.props.searchProducts(value);    
      
    } 
    
    render(){
        return( 
          
            <div class="control search-bar">
                <input class="input" name="text" type="text" placeholder="Type product name...For example Xiaomi..." onChange={(e) => this.handleChange(e)} value={this.state.text} />
            </div>
        )
    }
} 

export default Search;