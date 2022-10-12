import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name:  String, 
  weight: Number,
  images: [String]
});

export default mongoose.model('User', UserSchema)