import { useState } from "react";

const DerivedState = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('');
    const handleUsers = () => {
        setUsers([...users, user])
        // console.log(user)
    }
    const total = users.length;
    const last  = users[users.length-1];
    const unique = [...new Set(users)].length
    return (
        <div>
            <h2>Total users:{total}</h2>
            <h2>Last User:{last}</h2>
            <h2>Unique User:{unique}</h2>
            <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="Enter name" />
            <button onClick={handleUsers}>click</button>
            {
                users.map((item, index) => {

                    return (
                        <h4 key={index}> {item}</h4>
                    )
                }
                )

            }
        </div>
    )
}
export default DerivedState;
