const mongoose = require('mongoose');
const User = require('./User');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URI, () => {
    console.log("Connected to MongoDB");
});

/*
async function run() {
    const example = new Example({
        name: "Steven",
        age: 14
    });
    await example.save();
    console.log(example);
}
run()
*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/landing.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/login.html'));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/signup.html'));
})

app.post('/signup', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        age: parseInt(req.body.age),
        school: req.body.school,
        id: parseInt(req.body.id),
        gender: req.body.gender
    });
    user.save();
    console.log(user)
})

app.listen(3000)