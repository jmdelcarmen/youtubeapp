'use strict';

const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String
  },
  profileImage: {
    type: String
  },
  created_at: {type: Date, default: Date.now },
  //video objects
  videoUploads: {type: Array},
  //path to videos
  favorites: {type: Array}
});

module.exports = mongoose.model('User', userSchema);
