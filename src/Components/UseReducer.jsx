import { useReducer } from "react"

const employeData = {
    name:'',
    password:'',
    email:'',
    mobile:'',
    city:''
}
const reducer = (data,action)=>{
            return{...data,[action.type]:action.val}
}
export default function UseReducer(){
    const[state,dispatch ]= useReducer(reducer,employeData)
    console.log(state);
    
    return(
        <div>
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder="Enter username"/><br/>
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder="Enter password"/><br/>
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder="Enter email "/><br/>
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'mobile'})} placeholder="Enter mobile no "/><br/>
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder="Enter City "/><br/>
            <button>submit</button>


            <ul>
                <li>Name: {state.name}</li>
                <li>Password: {state.password}</li>
                <li>Email: {state.email}</li>
                <li>Mobile: {state.mobile}</li>
                <li>City: {state.city}</li>
            </ul>
        </div>
    )
}