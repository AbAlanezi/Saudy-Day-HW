import React from 'react'
import { useNavigate } from 'react-router-dom'
function LogIn() {
    const [firestName , setFirestName]= React.useState("")
    const [ pass , setPass ] = React.useState<any>()
const navigate = useNavigate()

    const getInfo = ()=>{
if(firestName.length >=3 && pass.length >=8){
localStorage.setItem("firestName" ,firestName)
navigate("/saudiday")
}else{
    alert("Please enter correct information")
}
    }
  return (
    <div className='logIn-form'>
        <div className='logIn-form2'>
            
   <fieldset className='logIn-fieldset'>  
      <p className='logIn-fieldset-p'>تسجيل دخول </p>  
<input placeholder='البريد الالكتروني' type='email' onChange={e =>{setFirestName(e.target.value)}} ></input>
<input placeholder='الرمز السري' type='password' onChange={e =>{setPass(e.target.value)}}></input>
<button className='login-button' type='submit' onClick={getInfo}>أهلًا وسهلًا</button>

</fieldset> 
        </div>

    </div>
  )
}

export default LogIn