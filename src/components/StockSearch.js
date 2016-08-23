import React, { Component } from 'react'
import StockActions from '../actions/StockActions'
import Stocks from './Stocks'


export default class StockSearch extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
    this.changeSearchInput = this.changeSearchInput.bind(this);
    this.submit = this.submit.bind(this);
  }
  changeSearchInput(e){
    let search = e.target.value;
    this.setState({ search });
  }

  submit(e) {
    e.preventDefault();
    let { search } = this.state;
    StockActions.getDetails(search);
    StockActions.receiveStocks(search);
  }

  render() {
    return (
      <div>
          <form onSubmit={this.submit}>
            <input type="text" value={this.state.search} onChange={this.changeSearchInput} placeholder="Enter Company symbol"/>
            <button type="submit">Search</button>
            <button type="submit">Refresh</button>
          </form>
        </div>
    )
  }
}
