const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    phone: String,
    age: Number,
    school: String,
    id: Number,
    admin: Boolean,
    ratings: {
        type: [Number],
        default: []
    }
})

module.exports = mongoose.model("User", userSchema);