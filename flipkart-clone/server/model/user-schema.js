import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    fullname : {
        type : String,
        required : true,
        trim : true,
        min : 5,
        max : 20
    },
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        index : true,
        lowercase : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true
    },
    mobileNumber : {
        type : Number,
        required : true,
        unique : true
    }


});

const User = mongoose.model ('user', userSchema);

export default User;