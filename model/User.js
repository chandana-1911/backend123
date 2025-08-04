const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Export the model
module.exports = mongoose.model('User', userSchema);