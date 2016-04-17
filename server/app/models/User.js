/**
 * Created by leandroloi on 16/04/16.
 */

var mongoose = require('mongoose');

//Model
module.exports = mongoose.model('User',{
    email : String,
    password : String
});
