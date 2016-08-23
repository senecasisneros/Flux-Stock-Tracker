import React, { Component } from 'react';
import StockActions from '../actions/StockActions'
import StockStore from '../stores/StockStore'

export default class Stocks extends Component {
  constructor(){
    super();
    this.state={
      stocks : StockStore.getAllDetails()
    }
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({stocks : StockStore.getAllDetails()});
  }
  render(){
    let { Name , LastPrice , Timestamp , Volume , High , Low , Open} = this.state.stocks;
    return (
      <div>
        <h3>Company Details</h3>

          <p>Company : {Name}</p>
          <p>Open : {Open}</p>
          <p>Volume : {Volume}</p>
          <p>LastPrice : {LastPrice}</p>
          <p>High : {High}</p>
          <p>Low : {Low}</p>
          <p>Updated At : {Timestamp}</p>
      </div>
    )
  }
}
