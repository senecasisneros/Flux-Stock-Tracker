import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _stocks = [];
let _details ={};

class StockStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {

        case 'RECEIVE_STOCKS':
        _stocks = action.stocks;
        this.emit("CHANGE");
        break;

        case 'RECEIVE_DETAILS':
          _details = action.details;
          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _stocks;
  }
  getAllDetails() {
   return _details;
 }
}

export default new StockStore();
