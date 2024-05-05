import mongoose, { Schema, Document } from "mongoose";
//

export interface Message extends Document {
  content: String;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// !defining user
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
  isAcceptingMsg: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "USername is Required"],
    trim: true,
    unique: true,
  },
  email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      unique: true,
    match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g ,'Please use a valid email address']
  },
  password: { 
    type: String,
    required: [true, "Password is Required"],
   
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is Required"],
   
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry is Required"],
     },
  isVerified: {
    type: Boolean,
    required: false
     },
  isAcceptingMsg: {
    type: Boolean,
    required: true
    },
  
    messages: [MessageSchema]

});



const UserModel=(mongoose.models.User as mongoose.Model<User>)||mongoose.model<User>("User",UserSchema)


export default UserModel;