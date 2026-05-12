import { Link, useParams } from "react-router"

export default function UserDetails(){
    const UserParams = useParams();
    return(
        <div style={{display:'block'}}>
        <h1>UserDetails</h1>
        Selected id is: {UserParams.id}
        <br />

      <Link to="/users" >Back</Link>
        </div>
    )
}