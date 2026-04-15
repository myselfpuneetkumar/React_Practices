import App from "../App";
function Props_function({name}){
    // let name2 = 'TechnicalBoy'
    

    function timenew (){
        setInterval(()=>{
            let time = Date();
 let display = time.toLocaleLowerCase();

        })
    }
   
    return(
        <div>
            we are here at props function {name}
           { timenew()}
        <App name2 ='papa' />
        </div>
      
    )
}
export default Props_function;