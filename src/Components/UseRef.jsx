import { useRef } from "react";

function Useref(){
    const inputRef = useRef(null);
    const headRef = useRef(null);
    const inputHandler = ()=>{
        console.log("hi");
        inputRef.current.focus();
        inputRef.current.style.color = 'red'
        inputRef.current.value = ' 1234'
        inputRef.current.placeholder = "Start Typing"
        

    }
    const headHandler = ()=>{
        headRef.current.style.fontSize = '70px'

    }

    return(
        <>
        <h1 ref={headRef}>
            hello dosto
        </h1>
        <input type="text" ref={inputRef} placeholder="Enter your name"/>
        <button onClick={()=>{inputHandler();
            headHandler();}}>Focus on input field</button>
        
        </>

    )
}
export default Useref;