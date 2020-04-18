const { model, Schema } = require('mongoose')
import bcryptjs from 'bcryptjs'
import randomstring from 'randomstring'

const User = new Schema({
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  password: String,
  emailConfirmedAt: Date,
  emailConfirmCode: String
})

User.pre('save', function() {
  this.password = bcryptjs.hashSync(this.password)
  this.emailConfirmCode = randomstring.generate(72)
  this.createdAt = new Date()
})

module.exports = model('User', User)