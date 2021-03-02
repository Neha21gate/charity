import React from 'react';
import validateInfo from './Validation';
import useForm from './useForm';
import './Form.css';

import {   BrowserRouter as Router } from "react-router-dom";

const Signupform = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateInfo
  );




    return (
      <Router>
      

<div className="form_label">
       

        <form action="" className="form" onSubmit={handleSubmit}>

            <h1 style={{fontWeight:"bolder", marginTop:"15%", fontSize:"30px"}}>PLEASE FILL THE FORM GIVEN BELOW</h1><br/><br/><br/><br/>
<div className="form-inputs">


<input  type="text" name="organisation" placeholder="Enter your organisation name" className="form-input" value={values.organisation} onChange={handleChange}/>
{errors.organisation && <p>{errors.organisation}</p>}
</div>

        <div className="form-inputs">

        <input  type="text" name="username" placeholder="Enter your contact name" className="form-input" value={values.username} onChange={handleChange}/>
        {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">


<input  type="tel" name="mobile" placeholder="Enter your name" className="form-input" value={values.mobile} onChange={handleChange}/>
{errors.mobile&& <p>{errors.mobile}</p>}
</div>

        <div className="form-inputs">

       
        <input type="email" name="email" placeholder="Enter your email" className="form-input" id="email" value={values.email} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
        
        <input type="textarea"  name="message" placeholder="Enter your message here" className="form-input"  id="message" value={values.message} onChange={handleChange} autoComplete="off"/>
        {errors.message && <p>{errors.message}</p>}<br/><br/>
        
        <button className="form-input-btn"  type="submit">Contact us</button>
        </div>

      </form>
</div>

  <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p> <p> <span style={{color:'black'}}>DonatePlus - All Rights Reserved.</span></p>
                </div>           


               

</Router>
    )
};
export default Signupform;

