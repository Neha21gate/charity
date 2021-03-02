import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import "./register.css"


class CharityRegistration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            charity:'',
            nznumber:'',
            username: '',
            email: '',
            phone:'',
            address:''
        }
    }

   
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            charity: this.state.charity,
            nznumber: this.state.nznumber,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }

   
    render() {
        return (
          
                <div className="fillcontent" style={{ textAlign: "center" }} >
                    <h1 style={{ color: "#327ba8", fontFamily: " 'Anton', sans-serif", marginLeft: "10px", marginTop: "100px", fontSize: "40px" }}>REGISTER NOW</h1><br /><br />
  
                    <div className="login-box" style={{ textAlign: "center" }}>

                        <form onSubmit={this.handleSubmit} method="post">

                        <input type="text" name="charity" placeholder="Please enter trading name" id="text" onChange={this.handleChange} />

                        <input type="text" name="nznumber" placeholder="Please enter NZBN " id="text" onChange={this.handleChange} />

                            <input type="text" name="username" placeholder="Please enter your name" id="text" onChange={this.handleChange} />
                        
                            <input type="tel"  name="phone" placeholder="Please enter your contact number" id="phone" onChange={this.handleChange} /> 

                            <input type="email" name="email" placeholder="Please enter your email" id="email1" onChange={this.handleChange} />

                            <input type="text" name="address" placeholder="Please enter your address" id="address" onChange={this.handleChange} />
 
                           
                           <br/>
                            
                            
                            
                            <button className="btn2" >SUBMIT</button>
                            {/* <button className="btn2" onClick={() => alert("Hi there")}>SUBMIT</button> */}
                        </form>
                    </div>

                    <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p> <p> <span style={{color:'black'}}>DonatePlus - All Rights Reserved.</span></p>
                </div> 
                               

                </div>
            
        )
    }
}
export default withRouter(connect()(CharityRegistration));