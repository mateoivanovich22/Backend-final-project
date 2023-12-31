import mongoose from 'mongoose';
import db from './db.js';

const collection = 'users';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  age: Number,
  password: String,
  role: {
    type: String,
    default: 'user',
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'cart',
  },
  documents: [
    {
      name: String,
      reference: String,
    },
  ],
  last_connection: {
    type: Date,
    default: null,
  },
});


const UsersModel = db.model(collection, userSchema);

export default UsersModel;
