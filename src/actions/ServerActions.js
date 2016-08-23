import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveStocks(stocks) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_STOCKS',
      stocks
    })
  },
  getDetails(details) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_DETAILS',
      details
    })
  }
}

export default ServerActions
