import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const Onetodo = () => {
    const [user, setuser] = useState(null)
    const params = useParams();
    useEffect(()=>{
        console.log(params);
        let alluser = JSON.parse(localStorage.getItem("react-user"))
        let founduser = alluser.find((el)=>el.email==params.id );
        if (founduser) {
            setuser(founduser)
        }
        
    },[])
  return (
    <div>
      <h1>This information is for {user && user.email},{user && user.name}</h1>
    </div>
  )
}

export default Onetodo