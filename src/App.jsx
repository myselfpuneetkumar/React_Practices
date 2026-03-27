import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Login from './Components/Login'
import { Signup } from './Components/Signup'
import UseStates from './Components/USeStateJS'
import Conditional from './Components/Condition'
import Props from './Components/PropsJS'
import Input from './Components/InputJs'
import Skills from './Components/Skills_CheckBoxes'
import Dropdown from './Components/Handle_Radio&Dropdown'
import Loops from './Components/Loops'
import Images from './Components/Images'
import Useref from './Components/UseRef'

function App() {
  let name = "aditya singh"

  return (
    <>
    <h1>Hello world!!</h1>
    <h2>react code</h2>
    {/* <Login />
    <Signup />
    <UseStates />
    <Conditional />
    <Input /> */}

  
    {/* <Props  name = {name} email="aditya@tech.in"/>  */}
    {/* <Props>
      <h1>Hello world</h1>
    </Props>
    <Props>
      <h1>Hello world</h1>
    </Props> */}

    <Skills />
    {/* <Dropdown />
    <Loops /> */}
    {/* <Images /> */}
    <Useref />
    </>
  )
}

export default App
