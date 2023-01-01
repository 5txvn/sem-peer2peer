const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    email: String,
    phone: String,
    school: {
        value: String,
        other: Boolean
    },
    field: {
        value: String,
        other: Boolean
    },
    id: Number,
    rating: {
        type: Number,
        default: 0
    },
    ratings: {
        type: [Number],
        default: []
    }
})

module.exports = mongoose.model("User", userSchema);