import React from "react";
import "./Donorterms.css";
import {   BrowserRouter as Router} from "react-router-dom";

const Power =() =>{

    return(

        <Router>
        <div className="power">
        <div className="detail" >
        <h1 style={{fontSize:"30px", fontWeight:"bolder" }}>PROCESS </h1><br/><br/><br/>
    
        <p style={{fontSize:"17px", color:"#195170"}}><span style={{color:"#195170", fontSize:"19px"}}> Step 1)</span> $100.00  Donation by a cheerful donor.</p><br/><br/>
        <p style={{fontSize:"17px",color:"#195170" }}><span style={{color:"#195170", fontSize:"19px"}}>Step 2)</span> $100.00  Receipt issues by the Charity via DonatePlus by a cheerful donor.</p><br/><br/>
        <p style={{fontSize:"17px",color:"#195170" }}><span style={{color:"#195170", fontSize:"19px"}}>Step 3)</span> $33.00  Charity receives gift from DonatePlus by a cheerful donor.</p><br/><br/>
        <p style={{fontSize:"17px",color:"#195170"  }}><span style={{color:"#195170", fontSize:"19px"}}>Step 4)</span> $11.11  Charity recieves frm DonatePlus.</p><br/><br/>
        <p style={{fontSize:"17px",color:"#195170"  }}><span style={{color:"#195170", fontSize:"19px"}}>Step 5)</span> $11.11  Receipt issues by the Charity via DonatePlus.</p><br/><br/>
        <p style={{fontSize:"17px",color:"#195170"  }}><span style={{color:"#195170", fontSize:"19px"}}>Step 6)</span>$03.70  Charity recieves frm DonatePlus. </p><br/><br/>
        <p style={{fontSize:"17px",color:"#195170"  }}><span style={{color:"#195170", fontSize:"19px"}}>Step 7)</span> $ 48.14 Total donation received by the Charity.</p><br/><br/><b/><br/><br/><br/><br/>

      
    
        <h2 style={{fontSize:"18px", color:"#666365" }}>How you can terminate your DonatePlus appointment?</h2>
        <p style={{fontSize:"18px", color:"#666365"  }}><br/><br/>
        You can terminate your donateplus appointment at any time by emailing us at &nbsp;
     <a href = "mailto: chirag@icnz.ac.nz" style={{color:"#6b0e24"}}>admin@donorplus.co.nz </a> &nbsp;
    
        </p>
    
  
        <p style={{fontSize:"18px", color:"#666365"  }}><br/><br/>
        Feel free to email donateplus at any time on &nbsp;
     <a href = "mailto: chirag@icnz.ac.nz" style={{color:"#6b0e24"}}>admin@donorplus.co.nz</a> &nbsp;
      we are more than happy to help! 
        </p><br/><br/><br/>
    
    
    
    
        </div>
       
        <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p> <p> <span style={{color:'black'}}>DonatePlus - All Rights Reserved.</span></p>
                </div> 
        
        </div>
    
        </Router>
    )


}
export default Power;