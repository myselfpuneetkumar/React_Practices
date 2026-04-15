function Uncontrolled(){
const handleref = (event)=>{
    // event.preventDefault();
    const pass = document.querySelector('#pass').value;
    const name = document.querySelector('#name').value;
    console.log(name , pass);
}
    return(

        <>
        <form action="" onSubmit={handleref}>
            <input type="text" placeholder="enter your name"  id="name"/>name
            <input type="password" name="" id="pass"  placeholder="Enter your password"/>Password
            <input type="submit" value="submit" />
        </form>
        </>
    )
}export default Uncontrolled;