import mongoose from "mongoose";

const cabSchema= new mongoose.Schema({
    name:{type:String,required:true},
    Number:{type:String,required:true},
    email:{type:String,required:true},
    Number:{type:String,required:true},
})

const cabmodel = mongoose.models.cab || mongoose.model