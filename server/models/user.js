var mongoose = require('mongoose');

var User = mongoose.model('Users',{
    name: {
        type : String,
        require : true,
        minlength : 1,
        trim : true
    },
    email: {
        type : String,
        require : true,
        minlength : 3,
        trim : true
    } 
});

module.exports = {User};