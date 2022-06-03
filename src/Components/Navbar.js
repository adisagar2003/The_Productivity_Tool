import React from 'react'
import {Link,Route,Routes } from 'react-router-dom'

function Navbar() {
  return (
    <div class="navbar bg-base-100">
    <div class="flex-1"> <Link to='/'>
      <a class="btn btn-ghost normal-case text-xl">The Productivity App</a></Link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
          <Link to='/timer'>
        <li><a>Timer</a></li></Link>
       
    <Link to='/todo'>    <li><a>Todo </a></li></Link>


      </ul>
    </div>

  </div>
  )
}

export default Navbar
