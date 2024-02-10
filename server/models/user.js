const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer, // Image data
        contentType: String, // MIME type of the image
    }
});

module.exports = mongoose.model("User",userSchema);