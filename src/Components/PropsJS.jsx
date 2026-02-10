let Props = ({children,footer})=>{
    // let num = "Sachin"
    return(
        <>
        {/* {num || "no name"} Name is {prop.name || "No name is defined yet"} & Email is {prop.email} */}

        {children}{footer}
        </>
    )
}
export default Props