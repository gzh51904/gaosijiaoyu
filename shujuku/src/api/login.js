const express = require('express');

const Router = express.Router();
const {
    formatData
} = require('../utils');
const {
    mysql: query
} = require('../db');

Router.route('/')
    .get((req, res) => {
        let {
            phone,
            password
        } = req.query;
        console.log(phone);
        console.log(password)
        query(`select * from user where phone="${phone}" and password="${password}"`).then(function (data) {
            // data: promise对象改成resolve状态时传回的参数
            
            res.send(formatData({
                data,
            
            }))
        }, (err) => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })

    })
    Router.route('/all')
    .get((req, res) => {
       
        query(`select * from user`).then(function (data) {
            // data: promise对象改成resolve状态时传回的参数
            res.send(formatData({
                data,
            }))
        }, (err) => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })

    })
module.exports = Router;