import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./CharityList.css";
import "../Data.css";


function CharityList(props) {
    return (
        <>
        <div className="container">

        <h1 style={{fontSize:"35px", fontWeight:"bolder", marginTop:"0%"}}>Welcome to the Charity's Registration Page</h1><br/><br/>

            <h1 style={{fontSize:"20px", fontWeight:"10px solid"}}>Total number of charities available are-{props.charity.length}</h1><br/><br/><br/><br/>
            <Link to="/add_charity">
            <button style={{width:"250px", height:"40px",backgroundColor:"#a84d63", color:"white", cursor:"pointer" }}> Click Here For Your Registration</button></Link>  
        </div>
       
        <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p> <p> <span style={{color:'black'}}>DonatePlus - All Rights Reserved.</span></p>
                </div> 

            

</>


    );
    }
const mapStateToProps = (state) => {
    return {
        charity: state.charity,
    };
};

export default connect(mapStateToProps)(CharityList);