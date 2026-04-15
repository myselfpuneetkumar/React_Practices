import { useRef, useState } from 'react'
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
import Uncontrolled from './Components/Uncontrolled'
import Props_function from './Components/Props_function'
import ForwardRef from './Components/ForwardRef'
import UseFormS from './Components/useForm'
import UseTransition from './Components/UseTransition'

function App({name2}) {
  let name = "aditya singh"
// this code for ForwardRef.jsx file
  const inputRef = useRef();
  const handleForwardRef = ()=>{
    inputRef.current.value = 1234;
    inputRef.current.focus();
  }

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

    {/* <Skills /> */}
    {/* <Dropdown />
    <Loops /> */}
    {/* <Images /> */}
    {/* <Useref /> */}
    {/* <Uncontrolled /> */}

    {/* {`we are at ${name2}`} */}

    {/* <Props_function  name = 'punit' /> */}





    {/* <ForwardRef  ref={inputRef}/>
    <button onClick={handleForwardRef}>update data</button> */}

{/* <UseFormS /> */}



<UseTransition />




    </>
  )
}

export default App
