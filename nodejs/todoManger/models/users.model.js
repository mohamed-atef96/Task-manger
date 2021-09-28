const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const users = mongoose.model('users',userSchema);

module.exports = {users}