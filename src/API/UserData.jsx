import { useEffect, useState } from "react";
import API_Routes from "./API_Routes";
import { Link, Route, useNavigate } from "react-router";
// import tailwindcss from "@tailwindcss/vite";
// import "tailwindcss";


export default function UserData() {
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])
    const url = "http://localhost:3000/users"


    async function getUserData() {
        let response = await fetch(url);
        response = await response.json();
        setUserData(response)
        setLoading(false)
    }

    const deteteUser = async (id) => {
        console.log(id)
        let response = await fetch(url + '/' + id, {
            method: 'delete',

        })
        response = await response.json();
        console.log(response)
        if (response) {
            alert('successfully ')
        }

    }
    const editUser = (id) => {
        navigate('/edit/'+id)
    }
    return (

        <div>
           

            {/* <API_Routes /> */}


            <h1>Users data is displayed here.....</h1>
            <Link to="/" >Back</Link>
            <div>
                <ul className="flex bg-amber-200  border-amber-500 font-bold text-black-900 m-0.5 justify-around" >
                    <li>

                        <h1 >Name </h1>
                    </li>
                    <li>

                        <h1>Age </h1>
                    </li>
                    <li>

                        <h1>Emails</h1>
                    </li>

                    <li>

                        <h1>Actions</h1>
                    </li>
                </ul>
            </div>

            {
                !loading ? userData.map((item, index) => {
                    return (
                        <div>
                            <ul className="flex bg-amber-200  border-amber-500 font-bold text-orange-900 m-0.5 justify-around" >
                                <li>

                                    <h1 key={index}>{item.name} </h1>
                                </li>
                                <li>

                                    <h1 >{item.age} </h1>
                                </li>
                                <li>

                                    <h1 >{item.email} </h1>
                                </li>
                                <li>

                                    <button className="bg-blue-100" onClick={() => deteteUser(item.id)}> Delete</button>
                                    <button className="bg-blue-100" onClick={() => editUser(item.id)}> Edit</button>
                                </li>
                            </ul>
                        </div>
                    )
                }) : <h1>Loading....</h1>
            }
        </div>
    )
}
