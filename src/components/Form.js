import React, { useState } from 'react';
import './Form.css';
import Signupform from "./Signupform";




const Form = () => {

 
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  
  return (
    <>
      <div className='formcontain'>
        
        {!isSubmitted ? (
          <Signupform submitForm={submitForm} />
        ) : (
          
          <div className='formright'>
      <h1 className='form-success'> We have received your request!! Thank you for your registration. </h1><br/><br/>
    <h2 style={{color:"#4a544d"}} className="number">T: (027)-678-4966</h2><br/><br/>
    <h3  style={{color:"#4a544d"}} className="chat">E: chiragsolanki@donateplus.co.nz</h3>    <br/><br/><br/>
        {/*add email id*/ }
    </div>
        )}

       
      </div>
    </>
  );
};

export default Form;




