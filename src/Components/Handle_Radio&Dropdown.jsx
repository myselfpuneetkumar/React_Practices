import { useState } from "react";

function Dropdown() {
    const [gender, setGender] = useState('')
    const [city,setCity] = useState('not selected')



    function checkGender(event) {
        let name = event.target.value;
        let check = event.target.checked;
        if(check){
            setGender(name);
        }
        else{
            setGender("select a gender name")
        }
    }
    const selectCity = (event)=>{
        const value= event.target.value;
        setCity(value)


    }
    return (
        <>
            Select your Gender :{gender}<br />
            male<input type="radio" onChange={checkGender} value="male" name="gender" id="" />
            female<input type="radio" onChange={checkGender} value="female" name="gender" id="" />

            select your city:{city}<br/>

            <select onChange={selectCity} name="select" id="">select
                <option value="delhi">Delhi</option>
                <option value="ghaziabad">Ghaziabad</option>
                <option value="Noida">Noida</option>
            </select>


        </>
    )
}

export default Dropdown;