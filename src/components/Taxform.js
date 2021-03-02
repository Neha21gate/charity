import React from "react";
import "../Data.css";
import "./Donorterms.css";
import {   BrowserRouter as Router} from "react-router-dom";
import Pdf from '../pdf/Irform.pdf';



const Taxform =() =>{
 

        return(
    
            <Router>
            <div className="power">
            
            <h1 style={{ fontWeight:"bolder", marginTop:"15%", fontSize:"35px"}}>IR526 CLAIMING DONATION</h1><br/><br/><br/>
        
            <p style={{fontSize:"18px", color:"#232423"}}> • The total donations you claim can’t be more than your taxable income for the year.</p><br/><br/>
            <p style={{fontSize:"18px",color:"#232423" }}> • If you need to file an IR3 income tax return, Inland Revenue will need your return to check your taxable income before they can process your claim.</p><br/><br/>
            <p style={{fontSize:"18px",color:"#232423" }}> • If you have losses brought forward greater than your taxable income, you have no taxable income, so the credit cannot be claimed.</p><br/><br/>
            <p style={{fontSize:"18px",color:"#232423"  }}>• To avoid delays file your claim at the same time as you file your IR3.</p><br/><br/>
            <p style={{fontSize:"18px",color:"#232423"  }}>• Inland Revenue cannot process your claim before the end of the income year which it relates to.</p><br/><br/>
            <p style={{fontSize:"18px",color:"#232423"  }}>• The exceptions are if you are completing the claim on behalf of a deceased person, or
             going overseas permanently or for a significant period of time.</p><br/><br/><br/><br/>
            
             <a href = {Pdf} style={{fontSize:"30px", textDecoration:"none"}}> Click here to download IR526 form</a>
        
            <br/><br/><br/><br/>
           
      
            <p style={{fontSize:"18px", color:"#2b2a2a" , fontWeight:"bold"  }}><br/><br/>
            Feel free to email donateplus at any time on &nbsp;
         <a href = "mailto: chirag@icnz.ac.nz" style={{color:"#6b0e24"}} title="Follow the link">admin@donorplus.co.nz</a> &nbsp;
          we are more than happy to help! 
            </p><br/><br/><br/>
        
        
        
        
            </div>
           
           
            <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p> <p> <span style={{color:'black'}}>DonatePlus - All Rights Reserved.</span></p>
                </div> 
        
            </Router>
        )
    
    
    }
export default Taxform;