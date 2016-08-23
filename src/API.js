import ServerActions from './actions/ServerActions'
import jsonp from 'jsonp'
import axios from 'axios'

const API = {
  receiveStocks(obj) {
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${obj}`
    jsonp(url, null, function (err, stocks) {
      if (err) {
      console.error(err.message);
      } else {
      ServerActions.receiveStocks(stocks)
      }
    })
  },
  getDetails(text) {
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${text}`;
    jsonp(url, function (err, data) {
      if (err) {
      console.error(err.message);
      } else {
      ServerActions.getDetails(data);
      console.log('data:', data)
      }
    })
  }
}


export default API
