import React from 'react'

function Task({key,remove, todo}) {
    function removeTask(){
        console.log(todo)    
    }
  return (

    <div class='bg-slate-300 w-[240px] p-4 h-[85px] '>
      {todo}
    </div>
  )
}

export default Task
