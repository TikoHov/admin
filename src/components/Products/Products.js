import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './footable.bootstrap.min.css';
import './footable.standalone.min.css';
import '../main.css';
import './ecommerce.css';
import './color_skins.css';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

class Products extends React.Component{
            constructor(props){
                super(props)
            }
            render(){
                return(
                    <div>
                        
  {/* <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    name="viewport"
  />
  <meta
    name="description"
    content="Responsive Bootstrap 4 and web Application ui kit."
  />
  <title>:: Compass Bootstrap4 Admin ::</title> */}
  {/* <link rel="icon" href="favicon.ico" type="image/x-icon" /> */}
  {/* Favicon*/}
  {/* <link
    rel="stylesheet"
    href="assets/plugins/bootstrap/css/bootstrap.min.css"
  /> */}
  {/* <link
    rel="stylesheet"
    href="assets/plugins/footable-bootstrap/css/footable.bootstrap.min.css"
  /> */}
  {/* <link
    rel="stylesheet"
    href="assets/plugins/footable-bootstrap/css/footable.standalone.min.css"
  /> */}
  {/* Custom Css */}
  {/* <link rel="stylesheet" href="assets/css/main.css" /> */}
  {/* <link rel="stylesheet" href="assets/css/ecommerce.css" /> */}
  {/* <link rel="stylesheet" href="assets/css/color_skins.css" /> */}
  {/* Page Loader */}
 
  {/* Overlay For Sidebars */}
  <div className="overlay" />
  {/* Top Bar */}
  <nav className="navbar products-navbar">
    <div className="col-12 pt-2">
      <div className="navbar-header">
      <Link to='index.html' className="navbar-brand">
      
        <img src={logo} alt="logo"  width={30} alt="Compass" />
          <span className="m-l-10">Compass</span>
       
        </Link>
       
      </div>
      <ul className="nav navbar-nav navbar-left">
        <li>
        <Link to='#' className="navbar-brand"   className="ls-toggle-btn"
            data-close="true">
         
          {/* <FontAwesome 
              className="fas fa-search"
              name='fas fa-search'
              />
            */}
          </Link>
        </li>
        <li className="hidden-sm-down">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <span className="input-group-addon">
            <FontAwesome 
              className="fas fa-search"
              name='fas fa-search'
              />
            </span>
          </div>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          {" "}
          <Link to='#'  className="dropdown-toggle"
            data-toggle="dropdown"
            role="button">
               <FontAwesome 
              className="fas fa-bell"
              name='fas fa-bell'
              />
            
            {/* <div className="notify">
              <span className="heartbit" />
              <span className="point" />
            </div> */}
          </Link>
          <ul className="dropdown-menu dropdown-menu-right slideDown">
            <li className="header">NOTIFICATIONS</li>
            <li className="body">
              <ul className="menu list-unstyled">
                <li>
                  {" "}
                  <Link to='#'  className="icon-circle bg-blue">
                 
                    <div >
                    <FontAwesome 
              className="fas fa-flag"
              name='fas fa-flag'
              />
                    </div>
                    <div className="menu-info">
                      <h4>8 New Members joined</h4>
                      <p>
                      <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                      </p>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to='#'>
                
                    <div className="icon-circle bg-amber">
                    <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                    </div>
                    <div className="menu-info">
                      <h4>4 Sales made</h4>
                      <p>
                        {" "}
                        <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />"}
                      </p>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to='#' >

  
                    <div className="icon-circle bg-red">
                    <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                    </div>
                    <div className="menu-info">
                      <h4>
                        <b>Nancy Doe</b> Deleted account
                      </h4>
                      <p>
                        {" "}
                        <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                      </p>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to='#'>

                
                    <div className="icon-circle bg-green">
                    <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                    </div>
                    <div className="menu-info">
                      <h4>
                        <b>Nancy</b> Changed name
                      </h4>
                      <p>
                        {" "}
                        <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                      </p>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to='#' >

                    <div className="icon-circle bg-grey">
                    <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                    </div>
                    <div className="menu-info">
                      <h4>
                        <b>John</b> Commented your post
                      </h4>
                      <p>
                        {" "}
                        <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                      </p>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to='#' >

                 
                    <div className="icon-circle bg-purple">
                    <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                    </div>
                    <div className="menu-info">
                      <h4>
                        <b>John</b> Updated status
                      </h4>
                      <p>
                        {" "}
                        <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                      </p>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to='#' >

                 
                    <div className="icon-circle bg-light-blue">
                    <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                    </div>
                    <div className="menu-info">
                      <h4>Settings Updated</h4>
                      <p>
                        {" "}
                        <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer">
              {" "}
              <Link to='#' >View All Notifications </Link>
              {" "}
            </li>
          </ul>
        </li>
        <li className="dropdown">
          {" "}
          <Link to='#' className="dropdown-toggle"
            data-toggle="dropdown"
            role="button" > 

         
              <FontAwesome 
              className="fas fa-flag"
              name='fas fa-flag'
              />
            {/* <div className="notify">
              <span className="heartbit" />
              <span className="point" />
            </div> */}
          </Link>
          <ul className="dropdown-menu dropdown-menu-right slideDown">
            <li className="header">TASKS</li>
            <li className="body">
              <ul className="menu tasks list-unstyled">
                <li>
                  {" "}
                  <Link to='#'> 
                 
                    <div className="progress-container progress-primary">
                      <span className="progress-badge">
                        Footer display issue
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={86}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "86%" }}
                        >
                          <span className="progress-value">86%</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to='#'> 

                 
                    <div className="progress-container progress-info">
                      <span className="progress-badge">
                        Answer GitHub questions
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={35}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "35%" }}
                        >
                          <span className="progress-value">35%</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to='#'> 

                 
                    <div className="progress-container progress-success">
                      <span className="progress-badge">
                        Solve transition issue
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "72%" }}
                        >
                          <span className="progress-value">72%</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                <Link to='#'> 
                  
                    <div className="progress-container">
                      <span className="progress-badge">
                        {" "}
                        Create new dashboard
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={45}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "45%" }}
                        >
                          <span className="progress-value">45%</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to='#'> 

                  
                    <div className="progress-container progress-warning">
                      <span className="progress-badge">Panding Project</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={29}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "29%" }}
                        >
                          <span className="progress-value">29%</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer">
            <Link to='#'> View All </Link>

         
            </li>
          </ul>
        </li>
        <li>
        <Link to='#'  className="fullscreen hidden-sm-down"
            data-provide="fullscreen"
            data-close="true"> 
        
            <FontAwesome 
              className="fas fa-compress"
              name='fas fa-compress'
              />
          </Link>
        </li>
        <li>
        <Link to='#'  className="mega-menu" data-close="true"></Link>
        <FontAwesome 
              className="fas fa-power-off "
              name='fas fa-power-off '
              style={{color:'white'}}
              />
        
        </li>
        <li className>
        <Link to='#'  className="js-right-sidebar"
            data-close="true">
         
              <FontAwesome 
              className="fas fa-cogs"
              name='fas fa-cogs'
              />
         </Link>
        </li>
      </ul>
    </div>
  </nav>
  {/* Left Sidebar */}
  <aside id="leftsidebar" className="sidebar">
    <div className="menu product-menu">
      <ul className="list">
        <li>
          <div className="user-info">
            <div className="image">
            <Link to='profile.html'>
             
                <img src="http://www.wrraptheme.com/templates/compass/html/assets/images/profile_av.jpg" alt="User" />
              </Link>
            </div>
            <div className="detail">
              <h4>Michael</h4>
              <small>UI UX Designer</small>
            </div>
            <Link to='events.html' title="Events">
             
          
            <FontAwesome 
              className="fas fa-calendar"
              name='fas fa-calendar'
              />
            </Link>
            <Link to='mail-inbox.html' title="Inbox">
            
           
            <FontAwesome 
              className="fas fa-envelope"
              name='fas fa-envelope'
              />
            </Link>
            <Link to='contact.html' title="Contact List">

    
            <FontAwesome 
              className="fas fa-user-circle"
              name='fas fa-user-circle'
              />
            </Link>
            <Link to='chat.html' title="Chat App">
            
           
        
            <FontAwesome 
              className="fas fa-comments"
              name='fas fa-comments'
              />
            </Link>
            <Link to='sign-in.html' title="Sign out">
            <FontAwesome 
              className="fas fa-power-off"
              name='fas fa-power-off'
              />
            </Link>
          </div>
        </li>
        <li className="header">MAIN</li>
        <li>
          {" "}
          <Link to='#'  className="menu-toggle">

        
          <FontAwesome 
              className="fas fa-home"
              name='fas fa-home'
              />
            <span>Dashboard</span>
          </Link>
          <ul className="ml-menu">
            <li>
          <Link to='index.html' >Main</Link>
            </li>
            <li>
          <Link to='#' >RTL</Link>

            </li>
            <li>
          <Link to='#' >Horizontal</Link>

            </li>
            <li>
          <Link to='#' >Ecommerce</Link>
            </li>
            <li>
          <Link to='#' >Blog</Link>
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link to='#'  className="menu-toggle">

        
          
            <FontAwesome 
              className="fas fa-align-justify"
              name='fas fa-align-justify'
              />
            <span>App</span>{" "}
          </Link>
          <ul className="ml-menu">
            <li>
          <Link to='#'>Inbox</Link>
              
            </li>
            <li>
          <Link to='#'>Chat</Link>
            </li>
            <li>
          <Link to='#'>Calendar</Link>
            </li>
            <li>
          <Link to='#'>File Manager</Link>
            </li>
            <li>
          <Link to='#'>Contact list</Link>
            </li>
            <li>
          <Link to='#'>Blog</Link>
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link to='#' className="menu-toggle">
          <FontAwesome 
              className="fas fa-sync-alt"
              name='fas fa-sync-alt'
              />
            <span>User Interface (UI)</span>{" "}
          </Link>
          <ul className="ml-menu">
            <li>
              {" "}
          <Link to='#'>UI KIT</Link>
              {" "}
            </li>
            <li>
              {" "}
          <Link to='#'>Alerts</Link>

            {" "}
            </li>
            <li>
              {" "}
          <Link to='#'>Collapse</Link>

             {" "}
            </li>
            <li>
              {" "}
          <Link to='#'>Colors</Link>

              {" "}
            </li>
            <li>
              {" "}
          <Link to='#'>Dialogs</Link>

             {" "}
            </li>
            <li>
              {" "}
          <Link to='#'>Icons</Link>

             {" "}
            </li>
            <li>
              {" "}
          <Link to='#'>List Group</Link>

             {" "}
            </li>
            <li>
              {" "}
          <Link to='#'>Media Object</Link>

            {" "}
            </li>
            <li>
              {" "}
          <Link to='#'>Modals</Link>
{" "}
            </li>
            <li>
              {" "}
          <Link to='#'>Notifications</Link>

             
            </li>
            <li>
              {" "}
          <Link to='#'>Progress Bars</Link>

             
            </li>
            <li>
              {" "}
          <Link to='#'>Range Sliders</Link>

             
            </li>
            <li>
              {" "}
          <Link to='#'>Sortable &amp; Nestable</Link>

           
            </li>
            <li>
              {" "}
          <Link to='#'>Tabs</Link>

      
            </li>
            <li>
              {" "}
          <Link to='#'>Waves</Link>

            </li>
          </ul>
        </li>
        <li className="header">FORMS, CHARTS, TABLES</li>
        <li>
          {" "}
          <Link to='#'className="menu-toggle">

         
          <FontAwesome 
              className="fas fa-wpforms"
              name='fas fa-wpforms'
              />
            <span>Forms</span>{" "}
         </Link>
          <ul className="ml-menu">
            <li>
            <Link to='#'>Basic Form Elements</Link>

               
            
            </li>
            <li>
            <Link to='#'>Advanced Form Elements</Link>
         
            </li>
            <li>
            <Link to='#'>Form Examples</Link>
           
            </li>
            <li>
            <Link to='#'>Form Validation</Link>
            
            </li>
            <li>
            <Link to='#'>Form Wizard</Link>
              
            </li>
            <li>
                <Link to='#'>Editors</Link>
             
            </li>
            <li>
            <Link to='#'>File Upload</Link>
           
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link to='#'className="menu-toggle">

        
          <FontAwesome 
              className="fas fa-tables"
              name='fas fa-tables'
              />
            <span>Tables</span>{" "}
          </Link>
          <ul className="ml-menu">
            <li>
        <Link to='#'>Normal Tables</Link>
              
    
            </li>
            <li>
       
          <Link to='#'>Jquery Datatables</Link>

            </li>
            <li>
          
          <Link to='#'>Editable Tables</Link>

            
            </li>
            <li>
          
          <Link to='#'>Foo Tables</Link>

             
            </li>
            <li>
       
          <Link to='#'>Tables Color</Link>

     
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link to='#' className="menu-toggle">
          
       
          <FontAwesome 
              className="fas fa-chart-pie"
              name='fas fa-chart-pie'
              />
            <span>Charts</span>{" "}
          </Link>
          <ul className="ml-menu">
            <li>
              {" "}
          <Link to='#'>Morris</Link>
            </li>
            <li>
              {" "}
          <Link to='#'>Flot</Link>
            </li>
            <li>
              {" "}
          <Link to='#'>ChartJS</Link>

            </li>
            <li>
              {" "}
          <Link to='#'>Sparkline</Link>
              
            </li>
            <li>
              {" "}
          <Link to='#'>Jquery Knob</Link>
            </li>
          </ul>
        </li>
        <li className="header">EXTRA COMPONENTS</li>
        <li className="active open">
          {" "}
          <Link to='#' className="menu-toggle">

      
          <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
            <span>Ecommerce</span>{" "}
          </Link>
          <ul className="ml-menu">
            <li>
              {" "}
          <Link to='#'>Dashboard</Link>

       
            </li>
            <li>
              {" "}
          <Link to='#'>Product</Link>

              
            </li>
            <li className="active">
              {" "}
          <Link to='#'>Product List</Link>

              <a href="ec-product-List.html"></a>
            </li>
            <li>
              {" "}
          <Link to='#'>Product detail</Link>

             
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link to='#'  className="menu-toggle">
          <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
            <span>Widgets</span>{" "}
          </Link>
          <ul className="ml-menu">
            <li>
          <Link to='#' >Apps Widgets </Link>
            </li>
            <li>
          <Link to='#' >Data Widgets</Link>

      
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link to='#' className="menu-toggle" >

         
          <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
            <span>Authentication</span>{" "}
            </Link>
          <ul className="ml-menu">
            <li>
          <Link to='#'  >Sign In</Link>

             
            </li>
            <li>
            <Link to='#'  >Sign Up</Link>
           
            </li>
            <li>
            <Link to='#'  >Forgot Password </Link>

           
            </li>
            <li>
            <Link to='#'  >Page 404 </Link>

           
            </li>
            <li>
            <Link to='#'  >Page 500 </Link>

          
            </li>
            <li>
            <Link to='#'  >Page Offline </Link>

             
            </li>
            <li>
            <Link to='#'  >Locked Scree </Link>
              
             
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link to='#'  className="menu-toggle"> 
     
          <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
            <span>Sample Pages</span>{" "}
            </Link>

    
          <ul className="ml-menu">
            <li>
     
            <Link to='#' >Blank Page</Link> 

            </li>
            <li>
              {" "}
            <Link to='#' >Image Gallery</Link> 

              <a href="image-gallery.html"></a>{" "}
            </li>
            <li>
            <Link to='#' >Profile</Link> 
            </li>
            <li>
            <Link to='#' >Timeline</Link> 

          
            </li>
            <li>
            <Link to='#' >Pricing</Link> 

          
            </li>
            <li>
            <Link to='#' >Invoices</Link> 

              
            </li>
            <li>
            <Link to='#' >Search Results</Link> 

             
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <Link to='#' className="menu-toggle">
          
        
          <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
            <span>Maps</span>{" "}
          </Link>
          <ul className="ml-menu">
            <li>
              {" "}
          <Link to='#' >Google Map</Link>

            </li>
            <li>
              {" "}
          <Link to='#' >YandexMap</Link>

          
            </li>
            <li>
              {" "}
          <Link to='#' >jVectorMap</Link>
        
            </li>
          </ul>
        </li>
        <li className="header">Extra</li>
        <li>
          <div className="progress-container progress-primary m-t-10">
            <span className="progress-badge">Traffic this Month</span>
            <div className="progress">
              <div
                className="progress-bar progress-bar-warning"
                role="progressbar"
                aria-valuenow={67}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "67%" }}
              >
                <span className="progress-value">67%</span>
              </div>
            </div>
          </div>
          <div className="progress-container progress-info">
            <span className="progress-badge">Server Load</span>
            <div className="progress">
              <div
                className="progress-bar progress-bar-warning"
                role="progressbar"
                aria-valuenow={86}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "86%" }}
              >
                <span className="progress-value">86%</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
  {/* Right Sidebar */}
  {/* <aside id="rightsidebar" className="right-sidebar">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href="#setting">
        <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#chat">
        <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#activity">
          Activity
        </a>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane active slideRight" id="setting">
        <div className="slim_scroll">
          <div className="card">
            <h6>Skins</h6>
            <ul className="choose-skin list-unstyled">
              <li data-theme="purple">
                <div className="purple" />
              </li>
              <li data-theme="blue">
                <div className="blue" />
              </li>
              <li data-theme="cyan" className="active">
                <div className="cyan" />
              </li>
              <li data-theme="green">
                <div className="green" />
              </li>
              <li data-theme="orange">
                <div className="orange" />
              </li>
              <li data-theme="blush">
                <div className="blush" />
              </li>
            </ul>
          </div>
          <div className="card">
            <h6>Left Menu</h6>
            <ul className="list-unstyled theme-light-dark">
              <li>
                <div className="t-light btn btn-default btn-simple btn-round">
                  Light
                </div>
              </li>
              <li>
                <div className="t-dark btn btn-default btn-round">Dark</div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h6>General Settings</h6>
            <ul className="setting-list list-unstyled">
              <li>
                <div className="checkbox">
                  <input id="checkbox1" type="checkbox" />
                  <label htmlFor="checkbox1">Report Panel Usage</label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input id="checkbox2" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox2">Email Redirect</label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input id="checkbox3" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox3">Notifications</label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input id="checkbox4" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox4">Auto Updates</label>
                </div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h6>Account Settings</h6>
            <ul className="setting-list list-unstyled">
              <li>
                <div className="checkbox">
                  <input id="checkbox5" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox5">Offline</label>
                </div>
              </li>
              <li>
                <div className="checkbox">
                  <input id="checkbox6" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox6">Location Permission</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-pane right_chat pullUp" id="chat">
        <div className="slim_scroll">
          <div className="card">
            <div className="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-addon">
                <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <h6>Recent</h6>
            <ul className="list-unstyled">
              <li className="online">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar4.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="name">Sophia</span>
                      <span className="message">
                        There are many variations of passages of Lorem Ipsum
                        available
                      </span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="online">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar5.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="name">Grayson</span>
                      <span className="message">
                        All the Lorem Ipsum generators on the
                      </span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar2.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="name">Isabella</span>
                      <span className="message">
                        Contrary to popular belief, Lorem Ipsum
                      </span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="me">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar1.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="name">John</span>
                      <span className="message">
                        It is a long established fact that a reader
                      </span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="online">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar3.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="name">Alexander</span>
                      <span className="message">
                        Richard McClintock, a Latin professor
                      </span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <h6>Contacts</h6>
            <ul className="list-unstyled">
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar10.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar6.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar7.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar8.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar9.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="online inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar5.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar4.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar3.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="online inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar2.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="offline inlineblock">
                <a href="javascript:void(0);">
                  <div className="media">
                    <img
                      className="media-object "
                      src="assets/images/xs/avatar1.jpg"
                      alt
                    />
                    <div className="media-body">
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-pane slideRight" id="activity">
        <div className="slim_scroll">
          <div className="card">
            <h6>Recent Activity</h6>
            <ul className="list-unstyled activity">
              <li>
                <a href="javascript:void(0)">
                <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                  <div className="info">
                    <h4>Admin Birthday</h4>
                    <small>Will be Dec 21th</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                  <div className="info">
                    <h4>Code Change</h4>
                    <small>Will be Dec 22th</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                  <div className="info">
                    <h4>Add New Contact</h4>
                    <small>Will be Dec 23th</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                  <div className="info">
                    <h4>New Email</h4>
                    <small>Will be July 28th</small>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <h6>Project Status</h6>
            <div className="progress-container progress-primary">
              <span className="progress-badge">eCommerce Website</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-warning"
                  role="progressbar"
                  aria-valuenow={86}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "86%" }}
                >
                  <span className="progress-value">86%</span>
                </div>
              </div>
              <ul className="list-unstyled team-info">
                <li className="m-r-15">
                  <small>Team</small>
                </li>
                <li>
                  <img src="assets/images/xs/avatar2.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar3.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar4.jpg" alt="Avatar" />
                </li>
              </ul>
            </div>
            <div className="progress-container">
              <span className="progress-badge">iOS Game Dev</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-warning"
                  role="progressbar"
                  aria-valuenow={45}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "45%" }}
                >
                  <span className="progress-value">45%</span>
                </div>
              </div>
              <ul className="list-unstyled team-info">
                <li className="m-r-15">
                  <small>Team</small>
                </li>
                <li>
                  <img src="assets/images/xs/avatar10.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar9.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar8.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar7.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar6.jpg" alt="Avatar" />
                </li>
              </ul>
            </div>
            <div className="progress-container progress-warning">
              <span className="progress-badge">Home Development</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-warning"
                  role="progressbar"
                  aria-valuenow={29}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "29%" }}
                >
                  <span className="progress-value">29%</span>
                </div>
              </div>
              <ul className="list-unstyled team-info">
                <li className="m-r-15">
                  <small>Team</small>
                </li>
                <li>
                  <img src="assets/images/xs/avatar5.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar2.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="assets/images/xs/avatar7.jpg" alt="Avatar" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside> */}
  {/* Chat-launcher */}
  <div className="chat-launcher" />
  {/* <div className="chat-wrapper">
    <div className="card">
      <div className="header">
        <ul className="list-unstyled team-info margin-0">
          <li className="m-r-15">
            <h2>Design Team</h2>
          </li>
          <li>
            <img src="assets/images/xs/avatar2.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="assets/images/xs/avatar3.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="assets/images/xs/avatar4.jpg" alt="Avatar" />
          </li>
          <li>
            <img src="assets/images/xs/avatar6.jpg" alt="Avatar" />
          </li>
          <li>
            <a href="javascript:void(0);" title="Add Member">
            <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="body">
        <div className="chat-widget">
          <ul className="chat-scroll-list clearfix">
            <li className="left float-left">
              <img
                src="assets/images/xs/avatar3.jpg"
                className="rounded-circle"
                alt
              />
              <div className="chat-info">
                <a className="name" href="#">
                  Alexander
                </a>
                <span className="datetime">6:12</span>
                <span className="message">Hello, John </span>
              </div>
            </li>
            <li className="right">
              <div className="chat-info">
                <span className="datetime">6:15</span>{" "}
                <span className="message">
                  Hi, Alexander
                  <br /> How are you!
                </span>{" "}
              </div>
            </li>
            <li className="right">
              <div className="chat-info">
                <span className="datetime">6:16</span>{" "}
                <span className="message">
                  There are many variations of passages of Lorem Ipsum available
                </span>{" "}
              </div>
            </li>
            <li className="left float-left">
              {" "}
              <img
                src="assets/images/xs/avatar2.jpg"
                className="rounded-circle"
                alt
              />
              <div className="chat-info">
                {" "}
                <a className="name" href="#">
                  Elizabeth
                </a>{" "}
                <span className="datetime">6:25</span>{" "}
                <span className="message">
                  Hi, Alexander,
                  <br /> John <br /> What are you doing?
                </span>{" "}
              </div>
            </li>
            <li className="left float-left">
              {" "}
              <img
                src="assets/images/xs/avatar1.jpg"
                className="rounded-circle"
                alt
              />
              <div className="chat-info">
                {" "}
                <a className="name" href="#">
                  Michael
                </a>{" "}
                <span className="datetime">6:28</span>{" "}
                <span className="message">I would love to join the team.</span>{" "}
              </div>
            </li>
            <li className="right">
              <div className="chat-info">
                <span className="datetime">7:02</span>{" "}
                <span className="message">
                  Hello, <br />
                  Michael
                </span>{" "}
              </div>
            </li>
          </ul>
        </div>
        <div className="input-group p-t-15">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text here..."
          />
          <span className="input-group-addon">
          <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
          </span>
        </div>
      </div>
    </div>
  </div> */}
  <section className="content ecommerce-page">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h2>
            Product List
            <small className="text-muted">Welcome to Compass</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item">
              <a href="index.html">
              <FontAwesome 
              className="fas fa-circle"
              name='fas fa-circle'
              />
                 Compass
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="ec-dashboard.html">eCommerce</a>
            </li>
            <li className="breadcrumb-item active">Product List</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card product_item_list">
            <div className="body table-responsive">
              <table className="table table-hover m-b-0">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th data-breakpoints="sm xs">Detail</th>
                    <th data-breakpoints="xs">Amount</th>
                    <th data-breakpoints="xs md">Stock</th>
                    <th data-breakpoints="sm xs md">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="http://www.wrraptheme.com/templates/compass/html/assets/images/ecommerce/1.png"
                        width={48}
                        alt="Product img"
                      />
                    </td>
                    <td>
                      <h5>Simple Black Clock</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        randomised words even slightly believable
                      </span>
                    </td>
                    <td>$16.00</td>
                    <td>
                      <span className="col-green">In Stock</span>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-green"
                      >
                          <FontAwesome 
              className="fas fa-edit"
              name='fas fa-edit'
              />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-red"
                      >
                        <FontAwesome 
              className="fas fa-trash"
              name='fas fa-trash'
              />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="http://www.wrraptheme.com/templates/compass/html/assets/images/ecommerce/1.png"
                        width={48}
                        alt="Product img"
                      />
                    </td>
                    <td>
                      <h5>Brone Candle</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        It is a long established will be distracted
                      </span>
                    </td>
                    <td>$15.00</td>
                    <td>
                      <span className="col-amber">Low Stock</span>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-green"
                      >
                           <FontAwesome 
              className="fas fa-edit"
              name='fas fa-edit'
              />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-red"
                      >
                           <FontAwesome 
              className="fas fa-trash"
              name='fas fa-trash'
              />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="http://www.wrraptheme.com/templates/compass/html/assets/images/ecommerce/1.png"
                        width={48}
                        alt="Product img"
                      />
                    </td>
                    <td>
                      <h5>Wood Simple Clock</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        There passages of Lorem Ipsum available
                      </span>
                    </td>
                    <td>$16.00</td>
                    <td>
                      <span className="col-amber">Low Stock</span>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-green"
                      >
                          <FontAwesome 
              className="fas fa-edit"
              name='fas fa-edit'
              />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-red"
                      >
                         <FontAwesome 
              className="fas fa-trash"
              name='fas fa-trash'
              />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="http://www.wrraptheme.com/templates/compass/html/assets/images/ecommerce/1.png"
                        width={48}
                        alt="Product img"
                      />
                    </td>
                    <td>
                      <h5>Unero Small Bag</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        It is a long established fact that a distracted
                      </span>
                    </td>
                    <td>$23.00</td>
                    <td>
                      <span className="col-red">Out Of Stock</span>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-green"
                      >
                         <FontAwesome 
              className="fas fa-edit"
              name='fas fa-edit'
              />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-red"
                      >
                          <FontAwesome 
              className="fas fa-trash"
              name='fas fa-trash'
              />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="http://www.wrraptheme.com/templates/compass/html/assets/images/ecommerce/1.png"
                        width={48}
                        alt="Product img"
                      />
                    </td>
                    <td>
                      <h5>Simple Black Clock</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        Contrary to popular belief, simply random text
                      </span>
                    </td>
                    <td>$16.00</td>
                    <td>
                      <span className="col-green">In Stock</span>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-green"
                      >
                           <FontAwesome 
              className="fas fa-edit"
              name='fas fa-edit'
              />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-red"
                      >
                          <FontAwesome 
              className="fas fa-trash"
              name='fas fa-trash'
              />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="http://www.wrraptheme.com/templates/compass/html/assets/images/ecommerce/1.png"
                        width={48}
                        alt="Product img"
                      />
                    </td>
                    <td>
                      <h5>Brone Lamp Glasses</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        All the Lorem Ipsum generators on predefined chunks
                      </span>
                    </td>
                    <td>$12.00</td>
                    <td>
                      <span className="col-green">In Stock</span>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-green"
                      >
                          <FontAwesome 
              className="fas fa-edit"
              name='fas fa-edit'
              />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-red"
                      >
                       <FontAwesome 
              className="fas fa-trash"
              name='fas fa-trash'
              />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="http://www.wrraptheme.com/templates/compass/html/assets/images/ecommerce/1.png"
                        width={48}
                        alt="Product img"
                      />
                    </td>
                    <td>
                      <h5>Simple Black Clock</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        established fact that a be distracted
                      </span>
                    </td>
                    <td>$22.00</td>
                    <td>
                      <span className="col-red">Out Of Stock</span>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-green"
                      >
                         <FontAwesome 
              className="fas fa-edit"
              name='fas fa-edit'
              />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-default waves-effect waves-float waves-red"
                      >
                         <FontAwesome 
              className="fas fa-trash"
              name='fas fa-trash'
              />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="body">
              <ul className="pagination pagination-primary m-b-0">
                <li className="page-item">
                  <a className="page-link" href="#">
                  <FontAwesome 
              className="fas fa-arrow-left"
              name='fas fa-arrow-left'
              />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                  <FontAwesome 
              className="fas fa-arrow-right"
              name='fas fa-arrow-right'
              />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>

                )
            }


}export default Products



