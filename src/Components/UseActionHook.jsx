import { useActionState } from "react";


const UseActionHook = ()=>{
    const handleSubmit = async(previousData,formData)=>{
        let name  = formData.get("name")
        let password  = formData.get("password")
        
        await new Promise(res=>setTimeout(res,2000))
        // console.log("data here",name,password)
        // console.log(data)
        if(name && password){
            return{message :"Submitted",name,password
                
            }
        }
        else{
            return {error : "There is an empty field",name,password}
        }
    }
    const[data,action,pending] = useActionState(handleSubmit,undefined);
    // console.log(pending)
    return(
        <>
        <h1>UseActionHook</h1>
            <form action={action}>
                <input  type="text" defaultValue={data?.name} placeholder="Enter your name" name="name"/>
                <input defaultValue={data?.password} type="password" placeholder="Enter Password" name="password"/>
                <button disabled={pending}>{pending?"Submitting": "Submit"} </button>
            </form>
            {
                data?.error && <span style={{color:'grey'}}>{data?.error}</span>
            }
            {
                data?.message && <span style={{color:'green'}}>{data?.message}</span>
            }
            <h2>Name: {data?.name}</h2>
            <h2>Passeword: {data?.password}</h2>

        </>
    )
}
export default UseActionHook ;
