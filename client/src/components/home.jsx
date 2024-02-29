import React, { useEffect, useState } from 'react'
import axios from 'axios'
function home() {
  const [user,setuser]=useState({
    a:'',b:'',c:''
  })
  
  let name,value;
  const handleinput=(e)=>{
 
    name = e.target.name
    value = e.target.value
    setuser({...user,[name]:value})
  }
  
  const postdata = async(e)=>{
e.preventDefault()
await  axios.post('http://localhost:9999/a',{user}).then(res=>console.log(res)).catch(err=>console.log(err))


}
  
  
  return (
    <>
    <div className=" p-4 border rounded-md">

<input type="text" name="a" id="" value={user.a} onChange={handleinput}  className='my-3 w-96' /><br />
<input type="text" name="b" id="" value={user.b}  onChange={handleinput} className='my-3 w-96'/><br/>
<input type="text" name="c" id="" value={user.c} onChange={handleinput} className='my-3 w-96'  /><br />
<input type="submit" name="" id="" onClick={postdata} className='btn ring bg-red-300 rounded-sm w-96'/>

</div>


    
    
    
    
    
    
    
    
    
    
    
    
    </>

  )
}

export default home