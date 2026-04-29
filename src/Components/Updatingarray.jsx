import { useState } from "react";

const UpdatingArray = () => {
    const [data, setData] = useState([
        'sam', 'ram', 'peter'
    ])
    const [datadetails, setDataDetails] = useState([
        { name: "peter", age: 25, city: "ghaziabad" },
        { name: "shyam", age: 26, city: "delhi" },
        { name: "sam", age: 27, city: "noida" },]
    )
    const handleData = (name) => {
        // console.log(name.target.value)
        let lastname = name.target.value;
        data[data.length - 1] = lastname;
        setData([...data])
        console.log(data);

    }
    const handleAge = (event) => {
        // console.log(name.target.value)
        let lastAge = event.target.value;
        datadetails[datadetails.length - 1].age = lastAge;
        setDataDetails([...datadetails])
        // console.log(data);

    }
    return (
        <>
            <input type="text" onChange={handleData} placeholder="Enter last Name" />
            <input type="text" onChange={handleAge} placeholder="Enter last age" />
            {
                data.map((item)=>{
                    return(
                    <h1>{item}</h1>
                    )
                })
            }
            <hr />
            {
                datadetails.map((item, index) => {
                    return(
                        <div>
                    <h1 key={index}>Name: {item.name}</h1>
                    <h2>Age: {item.age}</h2>
                    <h2>City: {item.city}</h2>
                    </div>
                    )

                })
            }
        </>
    )
}
export default UpdatingArray;