import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  user:  String, 
  city: String
});

export default mongoose.model('Course', CourseSchema)