import React from 'react'; 
import "./Privacy.css";
import RoomIcon from '@material-ui/icons/Room';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';  
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import {  BrowserRouter as Router} from "react-router-dom";
  
const Privacypolicy = () => { 
  return ( 
    

    <Router>
    <div className="faq">  

    <div className="detail" style={{float:"none", width:"auto", textAlign:"center",marginTop:"100px",padding:"70px"}}>
               <h1 style={{fontSize:"32px" }}>DONORPLUS PRIVACY STATEMENT</h1><br/><br/><br/><br/><br/>
               <p style={{fontSize:"20px" }}>Where you wish to use TaxGift's services, or engage with a charity that uses 

               TaxGift's services, then we will collect personal information from you, including your name, contact

                information and IRD number. We will either collect this directly from you, or where you have given
                 permission for us to act as your agent, we will collect it from the 
               charity to whomyou have donated.<br/><br/>

               We collect this personal information in order to be ableto offer 
               our services to you and/or the charities to which you donate.  Besides our staff,we share this information
               the charity to  whom you donated,  third partiesthat assist us with the services that  we provide, and
               InlandRevenue, all in order be able  to receive donation certificates and to process the tax credit 
               on your behalf.<br/> <br/> <br/> 



Providing some information is optional. However, if you choose not to provide any of the personal
 information that  is requested, we are unlikely to be able to process your tax credit on
  your behalf and increase your donation to  your charity/ies.



You have the right to ask for a copy of any personal information we hold about you,  and to ask 
for it to be corrected if you think it is wrong. If you’d like to ask for a  copy of your information
 or to have it corrected, please contact us at &nbsp;
 <a href = "mailto: nehachoudhary0814@gmail.com" style={{color:"#6b0e24"}}>admin@donorplus.co.nz</a> &nbsp;
 or call us  on 0212390100.
</p>

    </div>
    <div className="insertdetails">
                         <p>Join Us </p>
                         
                         <div className="jointous"><br/><br/>
        
                         <Tooltip title="Gmail" aria-label="add">
                <Fab   href={"mailto: nehachoudhary0814@.com"} >
                  <EmailIcon />
                </Fab>
              </Tooltip>
        
                    <Tooltip title="Contact" aria-label="add">
               <Fab  href={"tel:+6421-239-0100"}> 
                  <AddIcCallIcon />
                
                </Fab>
              </Tooltip>
              <Tooltip title="Facebook" aria-label="add">
                <Fab href={"https://www.facebook.com/neha.choudhary.585559"}>
                  <FacebookIcon   />
                </Fab>
              </Tooltip>
              <Tooltip title="Whatsapp" aria-label="add">
                <Fab  href={"https://api.whatsapp.com/send?phone=+64212390100"}>
                  <WhatsAppIcon />
                </Fab>
              </Tooltip>
              <Tooltip title="Address" aria-label="add">
                <Fab   href={"http://maps.google.com/maps?q=61/51+Ireland Road+Mount Wellington,+Auckland+1060"}>
                  <RoomIcon/>
                </Fab>
              </Tooltip>
                         </div>
        
        </div> 
        
        {/* ninth body div in which footer available */ }      
                 
                  <div className="footer">
                  <h4 tyle={{fontWeight:"bold"}}>Donate Plus</h4>
                  <p style={{}}>Copyright © 2021  <span style={{color:'white'}}>donateplus - All Rights Reserved.</span></p>
                </div> 
    </div> 
    </Router>
  ); 
}; 
  
export default Privacypolicy;