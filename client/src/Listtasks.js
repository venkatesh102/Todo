import React from 'react'
import './style/list.scss' 
import axios from 'axios'
const Listtasks = (props,setItem) => { 
  function HandleDelete(id){
    axios.delete(`http://localhost:5000/delete/${id}`).then( 
      arr=>setItem(arr.data)
  )
  }
  return (
    <div className='list' key={props._id}>
        <h3>{props.task}</h3>
        <button onClick={()=>[HandleDelete(props._id)]}>X</button>
    </div>
  )
}

export default Listtasks