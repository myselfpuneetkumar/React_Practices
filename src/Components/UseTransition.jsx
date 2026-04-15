import { useState, useTransition } from "react";

const UseTransition = () => {
    const [pending, setTransition] = useTransition();
    const handleEvent = ()=>{
    setTransition(async () => {
        
        await new Promise(res => setTimeout(res, 5000))
        console.log("submitted")
    })
}
    return (
        <div>
            <h1>This is the UseTranstion method</h1>
            {
                pending ? <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Gif-Backgrounds-Free-Download.gif"   height="100px" width="100px" alt="" /> : " "
            }
            <br />
            <button onClick={handleEvent} disabled={pending} >{pending ? 'Submitting' : 'submit'}</button>
        </div>
    )
}
export default UseTransition; 