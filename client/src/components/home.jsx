import React, { useState } from 'react'

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
const{a,b,c}=user

const res=await fetch("/lala",{
  method:"post",
  headers:{
    "content-Type":"application/json"
  },body:JSON.stringify({
    a,b,c,
  })
})
const data = await res.json()
if(data.status!==200){
  window.alert('json end')
}else{
  window.alert('valid')
}

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