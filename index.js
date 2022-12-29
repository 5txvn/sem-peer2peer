//import everything
const mongoose = require('mongoose');
const User = require('./User');
const express = require('express');
const app = express();
const path = require('path');
//allow POST requests to happen
app.use(express.urlencoded({ extended: true }));
//make the js and css folders public
app.use(express.static(__dirname + "/src"))
app.use(express.static(__dirname + "/assets"))
//use ejs as the view engine
app.set("view engine", "ejs")
//import dotenv to connect to MongoDB
require('dotenv').config();
//set strictquery to false to avoid random error logging
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Connected to MongoDB");
    }
});

app.get('/home', (req, res) => {
    async function getInfo() {
        const users = await User.find({})
        res.render("home", {
            user: "Steven Livingston",
            data: users
        })
    }
    getInfo()
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/landing.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/login.html'));
})

app.get('/validate', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/validate.html'));
})

app.post('/validate', (req, res) => {
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
    async function createUser() {
        await user.save();
        console.log(user);
    }
    createUser()
})

app.listen(3000)