import React, { Component } from 'react'
import StockList from './StockList'
import StockStore from '../stores/StockStore'
import StockActions from '../actions/StockActions'
import {Table} from 'react-bootstrap'

export default class Results extends Component {
  constructor() {
    super();

    this.state = {
      stocks: StockStore.getAll(),
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      stocks: StockStore.getAll()
    });
  }
  render() {
    const StockItems = this.state.stocks.map((stock, index) => {
      return (
        <StockList key={index + 1} {...stock}/>
      )
    });
    return (
      <div>
        <h3>Stock</h3>
        {StockItems}
      </div>
    )
  }
}
