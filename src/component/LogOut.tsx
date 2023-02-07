import React from 'react'
import { Link } from 'react-router-dom';
const removLoc = ()=>{
    localStorage.removeItem("firestName");

}
function LogOut() {
  return (
    <div>
        <Link to={"/"}>
      <button onClick={removLoc}>LogUot</button>
        </Link>
    </div>
  )
}

export default LogOut
