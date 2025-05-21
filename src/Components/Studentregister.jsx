// import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Studentregister = () => {

  const navigate=useNavigate();
  

  const[user,setUser]=useState({
    Studentdata:"",
    Studentrollno:"",
    studentcontact:"",
    gender:"",
    Coursedata:""
  })
  
 const Location=useLocation();
  const [users,setUsers]=useState([Location.state?.users])

  const Handlechange=(event)=>{
    setUser({...user,[event.target.name]:event.target.value})

  }
  const Handleview=()=>{
    navigate("/studentview" ,{
      state:{users:users}
      
    })
  }
  
  const Handlesumbit=(event)=>{
    event.preventDefault();
    setUsers([...users,user])
    setUser({
    Studentdata:"",
    studentcontact:"",
    Studentrollno:"",
    gender:"",
    Coursedata:""
    })
    
  }

  // useEffect=(()=>{
  //   // console.log(users)

  // },[users])
  return (
    <div className='app'>
  <div className='one'>
       <form className='form' onSubmit={Handlesumbit}>
         <h1>Student Registration</h1>
         <label>Student Name</label>
         <input type='text' name='Studentdata'  value={user.Studentdata} placeholder='enter your name' onChange={Handlechange}/>
          <label>Roll No</label>
         <input type='number' name='Studentrollno' value={user.Studentrollno} placeholder='enter your Roll no' onChange={Handlechange}/>
        <label>Contact No</label>
         <input type='number' name='studentcontact' value={user.studentcontact} placeholder='enter your conatctNo' onChange={Handlechange}/>
         <label>Gender</label>
         <select name='gender' value={user.gender} onChange={Handlechange}>
  <option value="" disabled>Select an option</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  </select>

         <label>Course</label>
<select name='Coursedata' value={user.Coursedata} onChange={Handlechange}>
  <option value="" disabled>Select an option</option>
  <option value="AI">AI</option>
  <option value="ML">ML</option>
  <option value="GEN AI">GEN AI</option>
  <option value="BIG DATA">BIG DATA</option>
</select>

<div className='buttons'>
  <button className='ad' type='sumbit'>Add </button>
  <button className='vi' onClick={Handleview}>View</button>
</div>

   
</form>
      </div>
      
</div>
  )
}


export default Studentregister
