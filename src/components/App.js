import React, { Component } from 'react'
import StockSearch from './StockSearch'
import Results from './Results'
import Stocks from './Stocks'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
      <h1 className="text-center">Stock Tracker</h1>
      <StockSearch/>
       <Stocks/>
       <Results/>
      {this.props.children}
      </div>
    );
  }
}
