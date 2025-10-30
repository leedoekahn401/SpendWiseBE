import mongoose from "mongoose";


const groupSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,default:""},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    members:{type:[{userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},role:{type:String,enum:["admin","member"],default:"member"}}],default:[]},
    createdAt:{type:Date,default:Date.now}
},{timestamps:true,versionKey:false});

const Group = mongoose.model("Group",groupSchema);

export default Group;
