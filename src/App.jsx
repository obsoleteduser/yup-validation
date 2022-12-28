import React from 'react'
import './App.css'

export const App = () => {
  return (
    <div className='App'>
      <form>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Password'/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
