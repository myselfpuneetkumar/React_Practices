const ForwardRef = (props)=>{
    return(
        <>

        <input type="text"  ref={props.ref}/>
        hello world......
        </>
    )
}
export default ForwardRef;