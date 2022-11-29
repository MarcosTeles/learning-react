import React, { Fragment } from 'react'
import './App.css'

function App() {

  const structure = 
    <React.Fragment>
      <div className='inside-fragment'>
        <h1>Learning React</h1>
        <p>Using vite and typescript</p>
      </div>
    </React.Fragment>

  return (
    structure
  )

}

export default App
