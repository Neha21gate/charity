import './App.css';
import React, {useState} from "react";

import Data from './Data.js'
import { Switch,  BrowserRouter, Route, Link } from "react-router-dom";
import Services from "./components/Services";
import Privacypolicy from './components/Privacypolicy';
import Faqs from './components/Faqs';
import Form from "./components/Form";
import Workflow from './components/Workflow.js';
import oneonate from "./Images/oneonate.jpg";
import Donation from './components/Donation';
import Taxform from './components/Taxform';
import CharityList from "./components/CharityList";
import AddCharity from "./components/AddCharity";


function App() {

  const [click, setClick] = useState(false);



const handleClick = () => setClick (!click)

const closeMobileMenu =()=> setClick(false);


  return (
   <>
   <BrowserRouter>



   <nav className="navbar" >

<div className="nav-logo">

<Link to='/' className="navbar-logo">

<h1 ><img src={oneonate} width="300px" height="250px" style={{marginLeft:"2px", marginTop:"30px"}} alt="donateplus"/></h1>

</Link>
</div>

<div className="menu-icon" onClick={handleClick}>

<i className={click ? 'fas fa-times' : 'fas fa-bars'} />         
</div>

<ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
           <li className="nav-item">
           <Link to="/home" className="nav-links" onClick={closeMobileMenu}> HOME</Link>
            </li>

            

            <li className="nav-item">
           <Link to="/faqs" className="nav-links" onClick={closeMobileMenu}>FAQs </Link>
            </li>

            <li className="nav-item">
           <Link to="/tax-form" className="nav-links" onClick={closeMobileMenu}>IR526 </Link>
            </li>

            <li className="nav-item">
           <Link to="/contactus" className="nav-links" onClick={closeMobileMenu}> CONTACT+ </Link>
            </li>
           

            <li className="nav-item">
           <Link to="/charity-registration" className="nav-links" onClick={closeMobileMenu}> CHARITY LOGIN </Link>
            </li>
</ul>


</nav>

   

    <Switch>
   
    <Route path="/" exact component={Data} /> 
    <Route path="/donations" exact component={Data} /> 
    <Route path="/donation" exact component={Data} /> 
    <Route path="/charity" exact component={Data} /> 
    <Route path="/charity/" exact component={Data} /> 
    <Route path="/donate/" exact component={Data} /> 
    <Route path="/donate" exact component={Data} />
    <Route path="/home" exact  component={Data}/>
        <Route path="/services" component={Services}/> 
        <Route path='/privacy-policy' component={Privacypolicy}/> 
        <Route path='/faqs' component={ Faqs} /> 
        <Route path='/charity-registration' component={CharityList} /> 
        <Route path="/add_charity" component={AddCharity}/>
        <Route path="/charity" component={Data}/>
        <Route path="/workflow" component={Workflow}/>
        <Route path='/contactus' component={Form} /> 
        
        <Route path="/purpose" component={Donation}/>
        <Route path="/tax-form" component ={Taxform}/>
     

    </Switch>
    </BrowserRouter>


    </>
  );
}

export default App;