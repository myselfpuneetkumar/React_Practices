import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import CollegeDetails from "./CollegeDetails";
import Student from "./Student";
import CollegeDepartment from "./CollegeDepartment";
import Users from "./Users";
import UserDetails from "./UserDetails";

export default function RouterComponent() {
    return (
        <>

            <BrowserRouter>
                {/* <Navbar /> */}


                <Routes>
                    <Route element={<Navbar />}>
                        <Route path="/users" element={<Users />} />
                        <Route path="/users/:id" element={<UserDetails />} />


                        <Route path="/" element={<h1>This Is Routes</h1>} />
                        <Route path="user">
                            <Route path="about" element={<About />} />
                            <Route path="/user/home" element={<Home />} />
                            <Route path="/user/login" element={<Login />} />
                        </Route>
                    </Route>




                    <Route path="/college" element={<College />} >
                        <Route path="collegedetails" element={<CollegeDetails />} />
                        <Route index element={<Student />} />
                        <Route index path="student" element={<Student />} />
                        <Route path="department" element={<CollegeDepartment />} />
                    </Route>
                    {/* <Route path="/*" element={<Navigate to="/" /> } />  */}


                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}