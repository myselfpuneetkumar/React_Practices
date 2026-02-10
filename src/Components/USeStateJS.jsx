import { useState } from "react";
const UseStates = () => {
    const [name, setName] = useState("DellUser")
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>hello{name}no is there running {count}</h1>
            <button onClick={() => setName("Adii")}>Click me</button>
            <button onClick={() => {
                setCount(count + 1)
                document.title = `(${count + 1})`
            }}>Click me</button>


        </div>
    )
}
export default UseStates