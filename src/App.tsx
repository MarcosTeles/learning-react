import React, { Fragment } from 'react'
import './App.css'

import FirstComponent from './assets/components/first-component'
import SecondComponent from './assets/components/second-component'

function App() {

  const structure = 
    <React.Fragment>
      <div className='inside-fragment'>
        <h1>Learning React</h1>
        <p>Using vite and typescript</p>
        <hr/>
        <FirstComponent />
        <SecondComponent />
      </div>
    </React.Fragment>


  return (
    structure
  )

}

export default App
