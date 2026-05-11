import useToggle from "../useToggle"

export default function CustomHooks(){
    const[value,setValue] = useToggle(true);
    const[data,setData] = useToggle(true);
    console.log(value);
    return(
        <div>
            <button onClick={setValue}>Toggle</button>
            <button onClick={()=>setValue(false)}>Hide</button>
            <button onClick={()=>setValue(true)}>Show</button>
            <h1>Custom Hook In React Js</h1>
            {
                value? <h1>Hi dosto....</h1>: <h1>Press Show button</h1>
            }
            <hr />
            <button onClick={setData}>Toggle</button>
            <button onClick={()=>setData(false)}>Hide</button>
            <button onClick={()=>setData(true)}>Show</button>
            <h1>Custom Hook In React Js</h1>
            {
                data? <h1>Hi dosto.... second heading</h1>: <h1>Press on show</h1>
            }
        </div>

    )
}