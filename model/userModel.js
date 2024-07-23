// const mongoose = require("mongoose");
// const user = new mongoose.Schema({
//   userName: {
//     type: String,
//   },
//   phonNumber: {
//     type: Number,
//   },
//   email: {
//     type: String,
//   },
//   location: {
//     type: String,
//   },
//   date:{
//     type: String,
//   }

// });

// const userDB = mongoose.model("ani", user);
// module.exports = userDB;



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   
    mobileNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const userDB = mongoose.model('User', userSchema);

module.exports = userDB;
