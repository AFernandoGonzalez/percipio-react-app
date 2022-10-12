import express from 'express';
import User from './models/User.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/users.js'
import courseRoute from './routes/courses.js'
import cors from 'cors'

import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coursesdb.51wwjr8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(URI)
    .then(async () => {
        await mongoose.connect(URI);
        console.log('conected db');

    })
    .catch(() => {
        console.log(error)
    })


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use('/v1/users', userRoute)
app.use('/v1/courses', courseRoute)


app.listen(port, () => {
    console.log('server running in port', port);
})