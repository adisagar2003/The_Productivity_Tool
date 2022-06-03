import React, { useState } from 'react'
import Task from './Task';
function Todo() {


 const remove =id=>{
     console.log(tasks,'This is the okay line')
     console.log('removed',id)
setTasks(tasks.filter(tasks=>tasks.id !== id));
console.log(tasks,'This is the removed line')
 }
    function addTask(e){
       console.log(e.target.id)
        setTasks([...tasks,inputValue])
        
    }
    function removeTask(e){
        console.log(e.target)
        console.log(tasks)
    }
    const [tasks,setTasks] = useState([])
    const [inputValue,setInputValue] = useState({})
    console.log(inputValue,'Actual value')
  return (
    <div class='ml-20'>
    <div class="form-control">
  <label class="label">
    <span class="label-text"></span>
  </label>
  <label class="input-group">
    <input type="text" placeholder="0.01" class="input input-bordered" onChange={(e)=>setInputValue({task:e.target.value,
    id:Math.floor(Math.random()*1000),
    isCompleted:false
    })} />

    <span><button class='btn btn-ghost normal-case text-xl' onClick={addTask}>+</button></span>
  </label>
</div>


<ul>
    {tasks.map(task=>{

return <div class='p-10 font-semibold'><Task key={inputValue.id}  todo={task.task} remove={remove} /></div> 
    })}
</ul>
    </div>
  )
}

export default Todo
