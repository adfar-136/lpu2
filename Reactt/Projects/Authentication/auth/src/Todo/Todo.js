import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Header from './Header';
import MainSection from './MainSection';
import Sidenav from './Sidenav';


function App(props) {
  const navigate = useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }
  const [active,setActive] = useState("INBOX")
  return (
    <div>
      
      {props.name ? (<div>
        <Header name={props.name}/>
      <div className="row">
        <div className='col-md-2'>
          <Sidenav change={setActive}/>
        </div>
        <div className='col-md-10'>
          <MainSection active={active}/>
        </div>
        <button onClick={handleSignOut}>SignOut</button>
      </div>
      </div>):"Login Please"}

     
    </div>
  );
}

export default App;
