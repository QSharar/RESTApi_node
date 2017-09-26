var mongoose = require("mongoose");

var book = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author: { 
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    }
},
{
    versionKey: false
});

module.exports = mongoose.model("Book", book);