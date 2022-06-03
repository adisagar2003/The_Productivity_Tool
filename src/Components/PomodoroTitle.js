import React from 'react'

function PomodoroTitle(props) {
  return (
    <div class=' w-[50%] h-[100px] p-4 '>
    <h1 class='font-medium text-center'>{props.title}</h1>
    <br></br>
    <br></br>
    <br></br>
    <h5>{props.description}</h5>

  </div>
  )
}

export default PomodoroTitle
