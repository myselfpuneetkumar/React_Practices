import { Suspense, use } from "react";

const fetchData = ()=>fetch('https://dummyjson.com/users').then((response)=>response.json());
console.log(fetchData())

const userResource = fetchData();
function UseApi(){
    return(
        <>
        <h1>Welcome to Use APi</h1>
        <Suspense fallback="Loading.....">
        <Users fetchData={userResource} />
        </Suspense>
        </>
    )
}
export default UseApi;

function Users({fetchData}){
    let userData = use(fetchData);
    console.log(userData.users)

    return(
        <>
    <h1>This is user data</h1>
    {
        userData?.users?.map((data)=>{
            return(
                <div>
                    <h1>{data.firstName}</h1>
                </div>
            )
        })
    }
        </>
    )
}
