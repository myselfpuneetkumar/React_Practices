import { useActionState } from "react"
import './Form.css'

//This Page uses Use Action State to validate forms
export default function Form_Validation_UAS() {

    
    const handleLogin = (prevData, formData) => {
        let name = formData.get('name')
        let password = formData.get('password')
        // console.log(name, password)
        let regex = /^[A-Z0-9]+$/i;
        console.log('called.....')
        if (!name || name.length > 5) {
            return { error: 'Enter the less than 5' }
        }
        else if (!regex.test(password)) {
            return { error: 'Enter the valid data character' }
            
        }
        else {
            return { message: 'Login done....' }
        }
        
    }
    const [data, action, pending] = useActionState(handleLogin)
    console.log(data)
    // console.log("enter less than 5 numbers")
    return (
        <>

            <form action={action}>
                <input type="text" placeholder="Enter Name" name="name" />
                {
                    data?.message && <span style={{error}}>{data?.message}</span>
                    
                }
                {
                    data?.error && <span>{data?.error}</span>
                    
                }
                <br />
                <br />
                <br />
                <input type="text" placeholder="enter user password" name="password" />
                <br />
                <br />
                <br />
                <button>Login</button>
            </form>


        </>
    )
}

// import { useActionState } from 'react'
// export default function Form_Validation_UAS() {


//   const handleLogin = (prevData, formData) => {
//     let name = formData.get('name')
//     let password = formData.get('password')
//     let regex = /^[A-Z0-9]+$/i;


//     if ( !name || name.length > 5) {
//       return { error: 'Name can not be empty or Name should not container more then 5 characters',name,password }
//     } else if (!regex.test(password)) {
//       return { error: 'Password can  container only numbers and alphabets',name,password }
//     } else {
//       return { message: 'Login done',name,password }
//     }


//   }
//   const [data, action, pending] = useActionState(handleLogin);
//   return (
//     <div>
//       <h1>Validation with useActionState in React</h1>
//       {
//        data?.message && <span style={{color:'green'}} > {data?.message}</span>
//       }
//       {
//        data?.error && <span  style={{color:'red'}}> {data?.error}</span>
//       }
//       <form action={action}>
//         <input defaultValue={data?.name}  type="text" name='name' placeholder='enter user name' />
//         <br /><br />
//         <input type="text" defaultValue={data?.password}  name='password' placeholder='enter user password' />
//         <br /><br />
//         <button  >Login</button>
//       </form>
//     </div>

//   );
// }