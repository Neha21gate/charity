import React from "react";
import "./Data.css";
import Form from "./components/Form";





const Data =()=> {



    return (
        <>
      
        {/* main div */}
        <div className="wrapper">
        
   
        
        {/* first body div */}
        
                  <div className="first-content" >    
                  <p className="para" >GOD LOVES CHEERFUL GIVER</p><br/><br/>                       
                  </div>

                 
        
        
        {/* second body div */} 
        
                  <div className="second-content">
                     
        
                       <h2 >WHAT IS OUR OBJECTIVE ?</h2><br/><br/><br/>
                       <p  >To be a humble member of your charity family<br/><br/> HELP your charity <br/><br/>Spread care and love within our community. </p><br/>
                       
                     
                    
                  </div>
                  <div className="secondscontent" >
                     
        
                       <h2 >WHAT WE DO??</h2><br/><br/><br/>
                       <p >We are the link between the DONOR - IRD - CHARITY <br/><br/>
                       Donor has the power to automatically redonate their Tax- Credit to the Charity<br/><br/> This Act of Kindness can increase the original donation by 48%.  </p><br/>
                       
                     
                    
                  </div>
 
        
          
                 
        {/* third div   */ }
                  
                  <div  className="about-us" >

                      <h1 style={{fontSize: "35px"
}}>HOW IT WORKS!!</h1><br/><br/><br/>


<table className="simple-board">
        <tbody>
          <tr className="row0">
            <td className="cell0-0">$100.00</td>
            <td className="cell0-1"></td>
            <td className="cell0-2">Donation by a cheerful donor</td>
          </tr>
          <tr className="row1">
            <td className="cell1-0"></td>
            <td className="cell1-1">$100.00 </td>
            <td className="cell1-2">Receipt issued by the Charity via DonatePlus</td>
          </tr>
          <tr className="row2">
            <td className="cell2-0">$33.33</td>
            <td className="cell2-1"></td>
            <td className="cell2-2">Charity Receives from DonatePlus.</td>
          </tr>
          <tr className="row2">
            <td className="cell2-0"></td>
            <td className="cell2-1">$33.33</td>
            <td className="cell2-2">Receipt issued by the Charity via DonatePlus</td>
          </tr>
          <tr className="row2">
            <td className="cell2-0">$11.11 </td>
            <td className="cell2-1"></td>
            <td className="cell2-2">Charity Receives from DonatePlus</td>
          </tr>
          <tr className="row2">
            <td className="cell2-0"></td>
            <td className="cell2-1">$11.11</td>
            <td className="cell2-2">Receipt issued by the Charity via DonatePlus</td>
          </tr>
          <tr className="row2">
            <td className="cell2-0">$3.70 </td>
            <td className="cell2-1"></td>
            <td className="cell2-2">Charity Receives from DonatePlus</td>
          </tr>
          <tr className="row2">
            <td className="cell2-0"></td>
            <td className="cell2-1">$148.14 </td>
            <td className="cell2-2">Total Donation received by the Charity</td>
          </tr>

        </tbody>
      </table>
                 
                  
                  </div>
        
    
                            
                 
        {/* seventh body div in which contact us detail available */ }
                 
                      
                          <div className="login-box2" >
                            
                           <Form/>
                          </div>
      
        
        </div>
      
        </>
            
        );
        };
    
export default Data;