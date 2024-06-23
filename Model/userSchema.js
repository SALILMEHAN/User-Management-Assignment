import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true,
    },
    City:{
        type:String,
        required:true
    },
    ZipCode:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Deleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

export const User = mongoose.model('User',userSchema);