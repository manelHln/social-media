const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default:[]
    },
    following: {
        type: Array,
        default:[]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    description: String,
    city: String,
    from: String,
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("User", UserSchema)