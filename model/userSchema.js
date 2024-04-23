const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the user schema
const UserModel = new Schema({
    person: { type: String, }, // Name of the person
    email: { type: String, }, // Email of the user
    username: { type: String, }, // Username (assuming it's a number, change to String if it's alphanumeric)
    contact: { type: String, }, // Contact information
    password: { type: String, }, // User's password (should be hashed for security)
    photo: { type: String, }, // URL to the user's photo
}, { timestamps: true }); // Enable timestamps to automatically add createdAt and updatedAt fields

// Create the User model
const User = mongoose.model('User', UserModel);

module.exports = User; // Export the User model
