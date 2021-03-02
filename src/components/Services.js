import React from 'react';
import "./Donorterms.css";
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link,  BrowserRouter as Router } from "react-router-dom";



 const Services =(props)=>{


    return (
        <Router>
     
        <div className="donor">
        
        <h1 style={{fontSize:"35px", fontWeight:"bold", marginTop:"15%"}}>OUR SERVICES</h1><br/><br/><br/><br/><br/>

        <Link to="/workflow" onClick={()=>{props.history.push('/workflow')}}  style={{fontSize:"20px", textDecoration:"none", fontWeight:"bold" }} title="Follow the link" >1.) We are the link between DONOR - IRD - CHARITY.&nbsp; <span style={{fontSize:"15px", color:"#363034"}}>(Please click on the sentence for more details)</span></Link><br/><br/><br/>


        
        <Link to="/redonate" onClick={()=>{props.history.push('/redonate')}}  style={{fontSize:"20px", textDecoration:"none" ,fontWeight:"bold" }} title="Follow the link" >2.) Donor has the power to automatically redonate their Tax-Credit to the Charity.&nbsp; <span style={{fontSize:"15px",color:"#363034"}}>(Please click on the sentence for more details)</span></Link>

        <br/><br/><br/>
        <Link to="/purpose" onClick={()=>{props.history.push('/purpose')}}  style={{fontSize:"20px", textDecoration:"none" ,fontWeight:"bold" }} title="Follow the link" >3.) This act of kindnenss can increases the original donation by 48%.&nbsp; <span style={{fontSize:"15px", color:"#363034"}}>(Please click on the sentence for more details)</span></Link><br/><br/>


        <br/><br/>
           
      
           <p style={{fontSize:"18px", color:"#2b2a2a" ,fontWeight:"bold"  }}><br/><br/>
           Feel free to email donateplus at any time on &nbsp;
        <a href = "mailto: chirag@icnz.ac.nz" style={{color:"#6b0e24"}}  title="Follow the link">admin@donorplus.co.nz</a> &nbsp;
         we are more than happy to help! 
           </p><br/><br/><br/><br/><br/>


    


        </div>
   
        <div className="insertdetails">
                         <p>Join Us </p>
                         
                         <div className="jointous"><br/><br/>
        
                         <Tooltip title="Gmail" aria-label="add">
                <Fab   href={"mailto: chirag@icnz.ac.nz"} >
                  <EmailIcon />
                </Fab>
              </Tooltip>
        
                    <Tooltip title="Contact" aria-label="add">
               <Fab  href={"tel:+6427-678-4966"}> 
                  <AddIcCallIcon />
                
                </Fab>
              </Tooltip>
              
              <Tooltip title="Whatsapp" aria-label="add">
                <Fab  href={"https://api.whatsapp.com/send?phone=+64276784966"}>
                  <WhatsAppIcon />
                </Fab>
              </Tooltip>
              
                         </div>
        
        </div> 
        
        {/* ninth body div in which footer available */ }      
                 
                  <div className="footer">
                  <h4 style={{color:"#a8a5a7", fontWeight:"bold"}}>DonatePlus</h4>
                  <p style={{color:"#262325"}}>Copyright © 2021  <span style={{color:'white'}}>donateplus - All Rights Reserved.</span></p>
                </div>
        
        
</Router>


 )
};
export default Services;
