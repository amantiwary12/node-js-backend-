import mongoose from ' mongoose';

const userSchema = new mongoose.userSchema({
    
    email:{
        trype:String
    },
    password:{
        trype:String,
    },
    role:{
        trype:String,
        enum: ['admin', 'user'],
        default: 'user'
    }

},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
