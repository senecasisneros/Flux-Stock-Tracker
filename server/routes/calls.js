'use strict';

const express = require('express');
const router = express.Router();
const jquery = require('jquery')
const jsonp = require('jsonp')
const axios = require('axios')
const request = require('request')


// let url = 'http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=NFLX'
//
// router.route('/calls')
// request('http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=NFLX', function (err, res, body) {
//   if (err) {
//   res.statusCode = 400;
// } else {
//   console.log(body)
// }
// })
// request('http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=NFLX', function (error, res, body) {
//   if (!error && res.statusCode == 200) {
//     console.log('body:', body)
//   } else {
//     res.send(body)
//   }
// })







// router.route('/calls')
// .get((req, res) => {
//   console.log('works')
//   axios.get(url)
//     .then(function (response) {
//       console.log('response:', response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   });





module.exports = router;
