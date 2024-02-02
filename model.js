import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    } ,
    date:{
        type:Date,
        default: Date.now() 
    }
})

const TaskMode=mongoose.model('Task',TaskSchema);

export default TaskMode;