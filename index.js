//import everything
const mongoose = require('mongoose');
const User = require('./User');
const express = require('express');
const app = express();
const session = require('express-session')
const path = require('path');
const bcrypt = require('bcrypt');
//allow POST requests to happen
app.use(express.urlencoded({ extended: true }));
//make all the folders public
app.use(express.static("public"))
//use ejs as the view engine
app.set("view engine", "ejs")
//import dotenv to connect to MongoDB
require('dotenv').config();
//use express sessions
app.use(session({secret: process.env.SESSION_SECRET}))
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

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/signup.html'));
})

app.get('/validate', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/validate.html'));
})

app.post('/signup', (req, res) => {
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)
    const test = (req.body.school == "other") ? req.body.otherSchool : req.body.school
    console.log(test)

    const user = new User({
        username: req.body.username,
        password: hash,
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        school: {
            value: (req.body.school == "other") ? req.body.otherSchool : req.body.school,
            other: (req.body.school == "other") ? true : false
        },
        field: {
            value: (req.body.field == "other") ? req.body.otherField : req.body.field,
            other: (req.body.field == "other") ? true : false
        },
        id: parseInt(req.body.id)
    });
    async function createUser() {
        await user.save();
        console.log(user);
    }
    createUser()
   console.log(req.body)
})

app.listen(3000)