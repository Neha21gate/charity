import React from 'react'; 
import "./Donorterms.css";
import "../Data.css";
import {   BrowserRouter as Router } from "react-router-dom";
import "./Faqs.css";
import "./Navbar";
  
const Faqs = () => { 

    return (
        <Router>
       
       
     
        <div className="donor">
        
       
        <h1 style={{fontSize:"35px", fontWeight:"bolder", marginTop:"5%"}}>FREQUENTLY ASKED QUESTIONS</h1><br/><br/><br/><br/><br/><br/><br/>

    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold" }}> Can I claim a tax credit?? </h2>
    <p style={{fontSize:"18px", color:"#232423" }}> <br/><br/>
    You can claim a tax credit if you’re an individual (not a company, trust or partnership).<br/><br/>
    You earned taxable income (e.g., salary, wages, benefit, self-employed income,interest) in the income year you’re claiming for, and 
were a New Zealand resident for tax purposes at any time during the tax year.</p><br/><br/><br/>

<h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}> What can I claim as a tax credit??</h2>
    <p style={{fontSize:"18px", color:"#232423"  }}><br/><br/>
    <span style={{color:"blue"}}>DONATIONS</span><br/><br/>

A donation is a gift of money made voluntarily to a school/kindergarten or a donee organisation, where there is no identifiable direct benefit to the donor, or the donor's family.<br/><br/>

To claim a tax credit, a receipt must have the word "donation" written on it.

    <br/>
    </p><br/><br/><br/>

    <h2 style={{fontSize:"20px", color:"#1c1b1b" , fontWeight:"bold" }}>What I can not claim as a tax credit? ?</h2>
    <p style={{fontSize:"18px", color:"#232423" }}><br/><br/>
    Childcare and/or housekeeper payments from 1 April 2012 
 tuition, exam, tertiary education, private school fees or extracurricular activities, e.g., music lessons
donations you've made through payroll giving at your workplace.<br/><br/>
 
Payments made where there is direct bene t to the donor or the donor’s family. 
  
    </p><br/><br/><br/>

    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>How much can I claim??</h2><br/><br/>
    <p style={{fontSize:"18px", color:"#232423"  }}>
    You can claim the lesser of: 

33.3333% of the total donations you’ve made, or $ 33.3333% of your taxable income.

Go to <a href = "mailto: chirag@icnz.ac.nz" style={{color:"blue"}} title="Follow the link">ird.govt.nz/donations</a> for more information.

</p><br/><br/><br/>


<h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>
What is the minimum donation amount required to claim tax credits?
??</h2>
    <p style={{fontSize:"18px", color:"#232423"  }}><br/><br/>
    If you have receipts, you can claim a tax credit for donations of $5 or more. 

Go to <a href = "mailto: chirag@icnz.ac.nz" style={{color:"blue"}} title="Follow the link">ird.govt.nz/donations</a> &nbsp;

 for a list of approved done organisations.
    </p><br/><br/><br/>


    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>What are the criteria to claim tax credits? ?</h2>
    <p style={{fontSize:"18px", color:"#232423"  }}><br/><br/>
    <span style={{ color:"blue"  }} >CLAIMING DONATIONS</span><br/><br/>

 The total donations you claim can't be more than your taxable income for the year.<br/><br/>

 If you need to file an IR3 income tax return, IRD will need your return to check your taxable income before IRD can process your claim.<br/><br/>

 If you have losses brought forward greater than your taxable income, you have no taxable income, so the credit cannot be claimed.<br/><br/>

 To avoid delays file your claim at the same time as you file your IR3.<br/><br/>

 IRD will not process your claim before the end of the income year which it relates to. <br/><br/>
    </p><br/><br/><br/>


    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>When will the Charity Organisation get the benefit of my tax credit??</h2>
    <p style={{fontSize:"18px", color:"#232423" , textAlign:"initial" }}><br/><br/>
    

    IRD will not process your claim before the end of the income year which it relates to.<br/><br/>

    IRD will need your return to check your taxable income before IRD can process your claim.<br/><br/>

 
    </p><br/><br/><br/>


    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>What are the criteria for a donation receipt?  ?</h2>
    <p style={{fontSize:"18px", color:"#232423"  }}> <br/><br/>
    All receipts must show:<br/><br/>

     Your and/or your spouse/partner’s name.<br/><br/>
     The amount and date of the donation.<br/><br/>
     A clear statement that it is a donation.<br/><br/>
     The signature of an authorised person.<br/><br/>
     An official stamp with the name of the donee organisation.<br/><br/>
     The word "copy" or "replacement" if it's a replacement receipt.<br/><br/>
    </p><br/><br/><br/>

 

   
    <p style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}><br/><br/><br/>
    Feel free to email donateplus at any time on &nbsp;
 <a href = "mailto: chirag@icnz.ac.nz" style={{color:"#6b0e24"}} title="Follow the link">admin@donorplus.co.nz</a> &nbsp;
  We are more than happy to help! 
    </p><br/><br/><br/>



    


        </div>
   
        <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p> <p> <span style={{color:'black'}}>DonatePlus - All Rights Reserved.</span></p>
                </div>    
        
        
</Router>


 )
};
  
export default Faqs;