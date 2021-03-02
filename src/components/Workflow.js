import React from "react";
import "./Donorterms.css";
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';


const Workflow =() =>{

    return (
       
     
     <div className="workflow">
        <div className="detail" >
        <h1 style={{fontSize:"30px", fontWeight:"bolder" }}>WORK-FLOW </h1><br/><br/><br/>
    
        <p style={{fontSize:"17px",color:"#262325"}}><span style={{color:"#262325", fontSize:"19px"}}>•</span> Donor gives gift(donation) to the Charity.</p><br/><br/>
        <p style={{fontSize:"17px",color:"#262325" }}><span style={{color:"#262325", fontSize:"19px"}}>•</span> Pick in to DonatePlus or join us to know us better.</p><br/><br/>
        <p style={{fontSize:"17px",color:"#262325" }}><span style={{color:"#262325", fontSize:"19px"}}>•</span> Noble cause will get complete gift sum from donor </p><br/><br/>
        <p style={{fontSize:"17px",color:"#262325"  }}><span style={{color:"#262325", fontSize:"19px"}}>•</span> DonatePlus fuse with Inland Revenue to guarantee tax break on gift(donation)</p><br/><br/>
        <p style={{fontSize:"17px",color:"#262325"  }}><span style={{color:"#262325", fontSize:"19px"}}>•</span> For each $c DonatePlus guarantees up to 33￠ from inland income at no expense to contributor</p><br/><br/>
        <p style={{fontSize:"17px",color:"#262325"  }}><span style={{color:"#262325", fontSize:"19px"}}>•</span> Donateplus passes tax credit to unique charity as an extra gift(donation) </p><br/><br/>
        

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
        
      </div>


    );

}
export default Workflow;