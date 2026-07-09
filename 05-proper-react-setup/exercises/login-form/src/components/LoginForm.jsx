import { useState } from "react";
import './LoginForm.css'

 export function LoginForm() {
  const [showButton, setShowButton] = useState(true);


  function handleShowButton(){
    setShowButton(!showButton);
    // Another sollution
    //  { showButton ? setShowButton(false) : setShowButton(true)}
  }
   

 
  return (
    <div className="app-container">
      <p className="header">Hello, welcome to my website</p>
     <div className="input-show-container">
      <div>
        <input className="input" placeholder="Email" />


        <input
          className="input"
          placeholder="Password"
          type={showButton ? "password" : "text"}
        />
      </div>
      <button onClick={handleShowButton} className="show-hide-button">
        {showButton ? "Show" : "Hide"}
      </button>

</div>
      <div>
        <button className="button">Login</button>
        <button className="button">Sign up</button>
      </div>
    </div>
  );
    
  }