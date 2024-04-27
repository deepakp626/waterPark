import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, required: true, unique: true },
    arivalDate: { type: Date, required: true },
    adults: { type: Number, default: 0 },
    children: { type: Number, default: 0 },
    paymentStatus:{type:Boolean,default:false},
    paymentID:{type:String,default:null}

})

const User = mongoose.model('User', userSchema);

export default User;