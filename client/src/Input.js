import React from 'react'
import axios from 'axios'
import './style/input.scss'
const Input = (props1) => { 
    function HandlePost(e){
      props1.setTask('') 
        e.preventDefault()
        axios.post("http://localhost:5000/addtask",{task:props1.newTask}).then(
          arr=>{
            props1.setItem(arr.data)
          
          }
        )
        .catch((err)=>{
            console.log(err)
        })
      }
  return (
    <form  onSubmit={HandlePost}>
    <input className='first' placeholder='Add task ' type='text' name='task' value={props1.newTask} onChange={(e)=>props1.setTask(e.target.value)}></input>
    <input className='second' type='submit' name='submit' />
    </form> 
  )
}

export default Input