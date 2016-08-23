// 'use strict';
//
// const express = require('express');
// const router = express.Router();
//
// router.route('/')
//   .get((req, res) => {
//     Stock.find({}, (err, stocks) => {
//       res.status(err ? 400 : 200).send(err || stocks);
//     });
//   })
// .post((req, res) => {
//   Stock.create(req.body, (err, stocks) => {
//     res.status(err ? 400 : 200).send(err || stocks);
//   })
// })
//
// router.route('/:id')
// .get((req, res) => {
//   Stock.findById(req.params.id, (err, stock) => {
//     res.status(err ? 400 : 200).send(err || stock);
//   });
// })
// .delete((req, res) => {
//   Stock.findByIdAndRemove(req.params.id, (err, stocks) => {
//     res.status(err ? 400 : 200).send(err || stocks);
//   })
// })
// .put((req, res) => {
//   Stock.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, stocks) => {
//     if(err) {
//       return res.status(400).send(err);
//     }
//
//     Stock.find({}, (err, stocks) => {
//       res.status(err ? 400 : 200).send(err || stocks);
//     });
//   });
// })
//
//
// module.exports = router;
