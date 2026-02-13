import ComponentReuse from './ComponentReuse'
import data from './Playlist.json'

function Loops(){
    // const userName = ['anil','deepak','jhalak','buggu']
    const userData = [
        {
            name:"aditya",
            age:14,
            email:"aditya@gmail.com",
            id:1
        },
        {
            name:"buggu",
            age:14,
            email:"buggu@gmail.com",
            id:2       
         },
        {
            name:"deepak",
            age:18,
            email:"deepak@gmail.com",
            id:3
        },
        {
            name:"daksh",
            age:19,
            email:"daksh@gmail.com",
            id:4
        }
    ]
    return(
        <>


        <h1>data are</h1>


        <table border="2px">
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>age</td>
                </tr>
            </thead>
          <tbody>
             
            {
                userData.map((user)=>{
                    return(
                       <tr key={user.id}>
                    <td>{user.id}</td> 
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    </tr> 
                    )


                })
            }
       
                    
          </tbody>

        </table>

        <h1>channel data</h1>
        <table border="2px">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Url</td>
                    
                </tr>
            </thead>
            <tbody>
                {
                    data.map((channel)=>{
                        return(
                            <tr key={channel.name}>
                                {/* <td>{channel.name}</td>
                                <td><a href={channel.url} target='_blank'>{channel.url}</a></td> */}
                                <ComponentReuse  name= {channel.name} url={channel.url}/>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
} 
export default Loops;