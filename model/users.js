import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
         type: String,
         required: true
    },
    flag_active:{
        type: Boolean
    }
}, { collection: 'user', timestamps: true });

export default mongoose.model('user', userSchema);
