import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Login() {
  const [user,setuser]=useState({
    email:'',password:''
  })
  
  let name,value;
  const handleinput=(e)=>{
 
    name = e.target.name
    value = e.target.value
    setuser({...user,[name]:value})
  }
  
  const postdata = async(e)=>{
e.preventDefault()
await  axios.post('http://localhost:9999/Login',{user}).then(res=>console.log(res)).catch(err=>console.log(err))


}
  
  
  return (
    <>
    <div className=" flex justify-center">
    <div className=" p-4 border rounded-md text-center">
<div className="fs-4">login</div>
<input type="text" name="email" id="" value={user.email} onChange={handleinput}  className='my-3 rounded-sm w-96' /><br />
<input type="text" name="password" id="" value={user.password}  onChange={handleinput} className='my-3 rounded-sm w-96'/><br/>
<input type="submit" name="" id="" onClick={postdata} className='btn ring bg-red-300 rounded-sm w-96 my-3'/>

</div>
</div>


    
    
    
    
    
    
    
    
    
    
    
    
    </>

  )
}

export default Login