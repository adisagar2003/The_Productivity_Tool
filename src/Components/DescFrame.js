import React from 'react'
import {Link} from 'react-router-dom'
function DescFrame() {
  return (
    <div class='float-right  w-[40%] h-[500px] p-10 mt-20'>
        <i>"Always deliver more than expected."</i><br></br><br></br>
        <div class='flex gap-10'><Link to='/timer'>
        <button class='btn btn-active'>Timer</button></Link>
      
       <Link to='/todo'><button class='btn btn-active'>Todo</button></Link> </div>
    </div>
  )
}

export default DescFrame
