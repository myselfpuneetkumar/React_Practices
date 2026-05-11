import { useParams } from "react-router"

export default function UserDetails(){
    const UserParams = useParams();
    return(
        <>
        <h1>UserDetails</h1>
        Selected id is: {UserParams.id}
        </>
    )
}