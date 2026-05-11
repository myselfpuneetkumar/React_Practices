import { useId } from "react"

export default function UseIdHook() {
    const user = useId();
    const password = useId();
    const skills = useId();
    const terms = useId();
    return (
        <div>
            <h2>Use Id Hook </h2> 



            <form action="">
                <label htmlFor={user + "name"}></label>
                <input id={user + "name"} type="text" placeholder="Enter your Name" />
                <label htmlFor={password}></label>
                <input id={password} type="text" placeholder="Enter your Password" />
                <label htmlFor={skills}></label>
                <input id={skills} type="text" placeholder="Enter your Skills" />
                <label htmlFor={terms}></label>
                <input id={terms} type={"checkbox"} />Terms & Conditions
            </form>



        </div>
    )
}

