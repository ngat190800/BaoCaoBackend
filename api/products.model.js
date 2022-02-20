const { text } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Products = new Schema({
    name: {
        type: String
    },
    detail: {
        type: String
    },
    cost:{
        type: Number
    },
    unit:{
        type: String
    },
    classify:{
        type: String
    },
    amount: {
        type: Number
    },
    // available_quatity: {
    //     type: Number
    // }
}, {
    collection: 'products'
});

module.exports = mongoose.model('Products', Products);