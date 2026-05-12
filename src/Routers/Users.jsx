import { Link } from "react-router"

export default function Users() {

    const userData = [
        {
            id: 0, name: 'daksh'
        },
        {
            id: 2, name: 'gaurav'
        },
        {
            id: 3, name: 'sam'
        },
        {
            id: 4, name: 'dipu'
        },
        {
            id: 5, name: 'tenu'
        }
    ]
    return (
        <>
            <h1>This Page is Users</h1>
            {
                userData.map((items) => {
                       return(
                        <div>
                    Name:<Link to={"/users/" + items.id} >{items.name}</Link>
                    </div>
                )

                }
               
                )
              
            }
            <h1>List with user name</h1>
            {
                userData.map((items) => {
                       return(
                        <div>
                    Name:<Link to={"/users/" + items.id +"/" + items.name } >{items.name}</Link>
                    </div>
                )

                }
               
                )
              
            }

        </>
    )
}