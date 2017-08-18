const mongoose = require('mongoose');
const { Schema } = mongoose;

console.log('setting user schema');
const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);