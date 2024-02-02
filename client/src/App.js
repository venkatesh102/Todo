import axios from 'axios'
import React from 'react'
import Input from './Input';
import Listtasks from './Listtasks';
import './style/app.scss'
const App = () => {
  const [newTask,setTask]=React.useState('');
  const [Items,setItem ]=React.useState([]);
React.useEffect(()=>{
    axios.get('http://localhost:5000/').then(
      arr=>setItem(arr.data)
    )
})

  return (
    <div className='app'>
    <Input newTask={newTask} setItem={setItem} setTask={setTask}/>
     {Items.map((ele)=>{
      return Listtasks(ele,setItem)
     })}
    </div>
  )
}

export default App