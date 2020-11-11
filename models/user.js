const mongoose = require('../data/db');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type:String,
    required: true,
    select:false,
  },
  createdAt: {
    type:Date,
    default: Date.now,
    },
  }),

const User = mongoose.model('User', UserSchema);

module.exports = User;
 
/*
const carroSchema = new Schema({
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    require: true
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('carros', carroSchema);
*/