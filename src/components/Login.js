import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './main.css';
import './authentication.css';
import './color_skins.css';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
var FontAwesome = require('react-fontawesome');
class Login extends Component{
render(){
return(
<div>
<nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
   <div className="container">
      <div className="navbar-translate n_logo">
        <Link to='#' className="navbar-brand" target="_blank">COMPASS</Link>
         <button className="navbar-toggler" type="button">
         <span className="navbar-toggler-bar bar1" />
         <span className="navbar-toggler-bar bar2" />
         <span className="navbar-toggler-bar bar3" />
         </button>
      </div>
      <div className="navbar-collapse">
         <ul className="navbar-nav">
            <li className="nav-item">
                 <Link to='index.html' className="nav-link" target="_blank">Home</Link>
            </li>
            <li className="nav-item">
               <Link to='#' className="nav-link" target="_blank">  Search Result</Link>               
            </li>
            <li className="nav-item">
               <Link to='sign-up.html' className="nav-link btn btn-primary btn-round" target="_blank">  SIGN UP</Link>               

            </li>
         </ul>
      </div>
   </div>
</nav>
{/* End Navbar */}
<div className="page-header">
   <div
      className="page-header-image"
      />
      <div className="container">
         <div className="col-md-12 content-center">
            <div className="card-plain">
               <form className="form" >
                  <div className="header">
                     <div className="logo-container">
                        <img src={logo} alt="logo" />
                     </div>
                     <h5>Log in</h5>
                  </div>
                  <div className="content">
                     <div className="input-group input-lg">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Enter User Name"
                           />
                        <span className="input-group-addon">
                           <FontAwesome 
                              className="fas fa-user"
                              name='fas fa-user'
                              />
                        </span>
                     </div>
                     <div className="input-group input-lg">
                        <input
                           type="password"
                           placeholder="Password"
                           className="form-control"
                           />
                        <span className="input-group-addon">
                           <FontAwesome 
                              className="fas fa-lock"
                              name='fas fa-lock'
                              />
                        </span>
                     </div>
                  </div>
                  <div className="footer text-center">
                     <Link to="/Products"
                        className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light"
                        >
                     SIGN IN
                     </Link>
                     <h6 className="m-t-20">
                      <Link to='forgot-password.html' className="link" target="_blank">   Forgot Password?</Link>               

                     </h6>
                  </div>
               </form>
            </div>
         </div>
      </div>
      <footer className="footer">
         <div className="container">
            <nav>
               <ul>
                  <li>
                  
                     <Link to='#' > Conact Us  </Link>               

                  </li>
                  <li>
                     <Link to='#' > About Us  </Link>               

                  </li>
                  <li>
                     <Link to='#' > FAQ  </Link>               

                  </li>
               </ul>
            </nav>
            <div className="copyright">
             
               <span>
               Designed by{" "}
               <Link to='#'target="_blank" > IT FRAME  </Link>               
               </span>
            </div>
         </div>
      </footer>
   </div>
</div>
)
}
}  
export default Login;