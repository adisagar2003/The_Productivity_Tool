import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import { useState } from 'react';
function TimerClock(){
  const [running,isRunning] = useState(true)


  return (
<div class='font-bold text-8xl ml-[30vh] mt-[10vh]'>
    <Timer active={running} duration={null}>
      <Timecode />
    </Timer>
    <button class='btn btn-active' onClick={()=>isRunning(true)}>Start</button>
<a></a>
    <button class='btn btn-active ml-10' onClick={()=>isRunning(false)}>Stop</button>
    </div>
  );


}

export default TimerClock