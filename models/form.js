import mongoose from "mongoose";


const fieldSchema=new mongoose.Schema({
    label:String,
    type:String,
    require:Boolean
})

const formSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    formTitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    fields:[fieldSchema],
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

export const form=mongoose.model("forms",formSchema);