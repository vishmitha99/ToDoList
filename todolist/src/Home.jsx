import React, { useState } from 'react'
import Create from './Create'

function Home() {
  const [todos , setTodos] = useState([])
  return (
    <div>
        <h2> <b>To Do List</b></h2>
        <Create/>
        {
          todos.map(todo =>(
            <div>
              {todo}
            </div>
          ))
        }
    </div>
  )
}

export default Home