import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  user:  String, 
  city: String,
});

export default mongoose.model('User', UserSchema)