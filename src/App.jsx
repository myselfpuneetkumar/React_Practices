import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './index.css'
// import './App.css'
// import './Tail.css'
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
import DerivedState from './Components/DerivedStates'
import LiftingStateUp from './Components/LiftingStateUp'
import UpdatingObject from './Components/ObjectUpdating'
import UpdatingArray from './Components/Updatingarray'
import UseActionHook from './Components/UseActionHook'
import UseIdHook from './Components/UseIdHOOK'
import CustomHooks from './Components/CustomHooks'
import ContextAPI from './Components/ContextAPI'
import RouterComponent from './Routers/Router'
import TailMain from './TailwindCSS_js/TailMain'
import API_Main from './API/API_Main'
import LocalApi from './API/LocalApi'
import API_Routes from './API/API_Routes'
import Form_Validation from './Data_Validation/Form_Validation'
import Form_Validation_UAS from './Data_Validation/Form_Validation_UAS'
import UseReducer from './Components/UseReducer'
import LazyLoad from './LazyLoading/LazyLoadMain'
import UseApi from './UseApi/UseApi'

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



{/* <UseTransition /> */}



{/* <DerivedState /> */}




{/* <LiftingStateUp /> */}

{/* <UpdatingObject /> */}



{/* <UpdatingArray /> */}



{/* < UseActionHook /> */}



{/* <UseIdHook /> */}



{/* <CustomHooks /> */}



{/* <ContextAPI /> */}



{/* <RouterComponent /> */}



{/* <TailMain /> */}



{/* <API_Main /> */}


{/* <LocalApi /> */}



{/* <API_Routes /> */}


{/* <Form_Validation /> */}



{/* <Form_Validation_UAS /> */}



{/* <UseReducer /> */}



{/* <LazyLoad /> */}



<UseApi />








    </>
  )
}

export default App
