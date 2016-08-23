import React,{ Component } from 'react'
import StockActions from '../actions/StockActions'

export default class StockList extends Component{
  constructor(){
    super();
    this.getDetails = this.getDetails.bind(this);
  }
  getDetails(e){
    let search = e.target.value;
    StockActions.getDetails(search);
  }
  render(){
    let { Symbol, Name, LastPrice } = this.props;
    console.log('Name:', Name)
    console.log('LastPrice:', LastPrice)
    return(
      <div>
      {Name} <span onClick={this.getDetails}>{Symbol} {LastPrice}</span>
     
      </div>
    )
  }
}
