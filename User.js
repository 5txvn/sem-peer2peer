const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    age: Number,
    school: String,
    id: Number,
    gender: String,
    createdAt: { type: Date, default: Date.now },
    admin: Boolean
})

module.exports = mongoose.model("User", userSchema);