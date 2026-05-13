import { useEffect, useState } from "react";

export default function API_Main() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getUserData();
    }, [])
    async function getUserData() {
        const url = 'https://dummyjson.com/users';
        let response = await fetch(url);
        response = await response.json();
        console.log(response.users);
        setData(response.users)

    }

    return (
        <div>
            <h1>This is Api Method</h1>
             <ul style={{ display: 'flex', justifyContent: 'space-around', border: '2px solid black' }}>
                                <li>
                                    firstName
                                </li>
                                <li>
                                   lastName
                                </li>
                                <li>
                                    Age
                                </li>
                            </ul>

            {
                data && data.map((items) => {
                    return (
                        <div>
                            <ul style={{ display: 'flex', justifyContent: 'space-around', border: '1px solid black', padding:'10px', margin:'0px' }}>
                                <li>
                                    {items.firstName}
                                </li>
                                <li>
                                    {items.lastName}
                                </li>
                                <li>
                                    {items.age}
                                </li>
                            </ul>

                        </div>

                    )
                })
                // : "Check your internet connection"
            }
        </div>
    )
}