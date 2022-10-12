import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  name:  String, 
  weight: Number,
  images: [String]
});

export default mongoose.model('Course', CourseSchema)