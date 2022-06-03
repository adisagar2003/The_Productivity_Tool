import React from 'react'
import App from '../App'
import PomodoroTitle from './PomodoroTitle'
import {Route,Routes} from 'react-router-dom'
import Todo from './Todo'
import TimerClock from './TimerClock'
function AppFrame() {
  return (

<div>
   <Routes>
       <Route  exact path='/' element={<PomodoroTitle title='The Productivity App' description='This is a simple web app which boosts your productivity by timers and todo lists. This was created with React JS, '/>} />
       <Route  exact path='/todo' element={<PomodoroTitle title='Assign some tasks to yourself'/>} />
    

         

   </Routes>
   <Routes>
       <Route  exact path='/todo' element={<Todo  />} />
       <Route exact path='/timer' element={<TimerClock />} />
    </Routes>
   </div>
  )
}

export default AppFrame
