import mongoose from 'mongoose';
import { users, courses } from './data.js'
import User from '../models/User.js'
import Course from '../models/Course.js'

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coursesdb.51wwjr8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const connect = async () => {
    try {
        await mongoose.connect(URI);
        console.log('conected db');
        User.inserMany(users, (error) => {
            if (error) {
                console.error();
            }
        });
        // Course.inserMany(courses, (error) => {
        //     if(error){
        //         console.error(error);
        //     }
        // })
    } catch (error) {
        console.log(error);
    }
};


// db.once('open', () => {
//     console.log('Database connection open');
//     UserSchema.inserMany(users, (error) => {
//         if (error) {
//             console.error();
//         }
//     });
//     CourseSchema.inserMany(courses, (error) => {
//         if(error){
//             console.error(error);
//         }
//     })
// })