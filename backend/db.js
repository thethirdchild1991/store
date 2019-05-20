const mongoose = require('mongoose')

const Schema = mongoose.Schema
const pageSchema = new Schema({
    name        : {type: String, required: true},
    link        : {type: String, required: true, default : ''},
    pageType    : {type: String, required: true, default : ''}
})