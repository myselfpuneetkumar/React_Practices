import { lazy, Suspense, useState } from "react";
// import LLUsers from "./LLUsers";

const User = lazy(()=>import('./LLUsers'))

function LazyLoad(){
    const[load,setLoad] = useState(false)
    return(
        <>
        <h1>
            Hello To Lazy Loading......
            </h1>

            {
                load ?<Suspense fallback={<h1>Loading.....</h1>}> <User /></Suspense>
                : null
            }
           

        <button onClick={()=>setLoad(!load)}>{load ?  'Hide user ':'Load User' }</button>
        </>
    )
}
export default LazyLoad ;