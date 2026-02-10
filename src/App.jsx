import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { Signup } from './Components/Signup'
import UseStates from './Components/USeStateJS'
import Conditional from './Components/Condition'
import Props from './Components/PropsJS'
import Input from './Components/InputJs'
import Skills from './Components/Skills_CheckBoxes'

function App() {
  let name = "aditya singh"

  return (
    <>
    <h1>Hello world!!</h1>
    <h2>react code</h2>
    <Login />
    <Signup />
    <UseStates />
    <Conditional />
    <Input />

  
    {/* <Props  name = {name} email="aditya@tech.in"/>  */}
    {/* <Props>
      <h1>Hello world</h1>
    </Props>
    <Props>
      <h1>Hello world</h1>
    </Props> */}

    <Skills />
    </>
  )
}

export default App
