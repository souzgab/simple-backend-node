const express = require('express');
const db = require('./db.json')

const routes = express.Router();

routes.get('/categories', (req, res) => {
    try {
        console.log(db.categories.map((x) => {x = db.categories}))
        if (db.categories > 1) {
            return res.status(200).json({
                message: "sucess",
                body: db.categories
            })
        }
    } catch (e) {
        return res.status(404).json({
            message: "fail",
            e
        })
    }
});
routes.get('/categories/products', (req, res) => {
    try {
        return res.status(200).json({
            message: "sucess",
            body: db.products
        })
    } catch (e) {
        return res.status(404).json({
            message: "fail",
            e
        })
    }
});

module.exports = routes;