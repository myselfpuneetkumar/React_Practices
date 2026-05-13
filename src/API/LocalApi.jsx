import { NavLink } from "react-router-dom";
import API_Routes from "./API_Routes";

export default function LocalApi() {
  return (
    <div>
      

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", width:"200px"}}>
      

        <NavLink to="/data">Display Data</NavLink>
       

        <NavLink to="/add">Add Data</NavLink>
          
    
      </div>

      <h1>Integrate JSON Server API and Loader</h1>

      <p>
        The Loader is used to show users that the requested file/data
        is under processing...
      </p>
    </div>
  );
}