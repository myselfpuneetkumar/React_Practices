import { BrowserRouter, Route, Routes } from "react-router";
import UserData from "./UserData";
import UserAdd from "./UserAdd";
import LocalApi from "./LocalApi";
import '../Tail.css'
import UserEdit from "./UserEdit";

export default function API_Routes() {
    return (

        <div>
            <BrowserRouter>
            
                <Routes>
                    <Route path="/data" element={<UserData />}>

                    </Route>
                    <Route path="/add" element={<UserAdd />} />
                    <Route path="/" element={<LocalApi />} />
                    <Route path="/edit/:id" element={<UserEdit />} />
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}