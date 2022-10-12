
import express from 'express';
import users from './mocks/user.js'
import bodyParser from 'body-parser';

import * as dotenv from 'dotenv'
dotenv.config()




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT


app.get('/v1/users', (req, res) => {
    console.log('get data= > ', users); 
    res.send(users);
})

app.get('/v1/users/:id', (req, res) => {
    console.log(users[0]);
    res.send(users[0]);
    res.status(200).end();
})

app.post('/v1/users', (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const role = req.body.role;

    console.log("id: ", id, "Username: ", username, "role: ", role);
    res.status(200).end()

})
app.put('/v1/users/:id', (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const role = req.body.role;

    console.log("id: ", id, "Username: ", username, "role: ", role);
    res.status(200).end()
})
app.delete('/v1/users/:id', (req, res) => {
    const msg = 'delete: id =>' + " " + req.params.id;
    console.log(msg);
    res.status(200).end()
})





app.listen(port, () => {
    console.log('server running in port', port);
})