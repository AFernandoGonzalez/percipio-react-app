import mongoose from 'mongoose';
import { users, courses } from './data.js'
import User from '../models/User.js'
import Course from '../models/Course.js'

import * as dotenv from 'dotenv'
dotenv.config()

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coursesdb.51wwjr8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(URI)
    .then(() => {
        console.log('DB Connected!')
        User.insertMany(users, (error) => {
            console.log('User: ', User);
            if (error) {
                console.error();
            }
        });
        Course.insertMany(courses, (error) => {
            if (error) {
                console.error(error);
            }
        })
    })
    .catch((error) => {
        console.log('Cannot connect to DB', error)
    })

