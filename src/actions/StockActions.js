import API from '../API'

const StockActions = {
  receiveStocks(obj) {
    API.receiveStocks(obj);
  },
  getDetails(text) {
   API.getDetails(text);
 }
}

export default StockActions
