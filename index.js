import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import TaskMode from './model.js'
import bodyParser from 'body-parser' 
dotenv.config()
const app=express();
app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json())
app.get("/",async(req,res)=>{
    return res.send(await TaskMode.find())
})
app.post('/addtask',async(req,res)=>{
    const {task}=req.body;
    try{
    const newTask=new TaskMode({
        task:task
    })
    await newTask.save();
    return res.send(await TaskMode.find());
}
  catch(error){
    console.log(error);
}
}) 
app.delete('/delete/:id',async(req,res)=>{
    await TaskMode.deleteOne({_id:req.params.id})
      return res.send( await TaskMode.find())
})
app.listen(process.env.PORT,()=>{
    mongoose.connect("mongodb://localhost:27017/Task").then(
    console.log("Server running successfully")
    )
})