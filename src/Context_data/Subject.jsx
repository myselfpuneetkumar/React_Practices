import { useContext } from "react"
import { SubjectContext } from "./ContextData"

export default function Subject(){
            const Subject = useContext(SubjectContext)
    return(
        <div style={{backgroundColor:'red', padding:'10px'}}>
            <h1>Subject is: {Subject}</h1>
        </div>
    )
}