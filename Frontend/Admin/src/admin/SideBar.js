// SideBar.js

import React, {Component} from 'react';

import { BrowserRouter as  Link } from 'react-router-dom';


export default class SideBar extends Component {
  constructor(props) {  
    super(props);  
     } 
    render(){
        return (<div>

<nav class="main-header navbar navbar-expand navbar-white navbar-light">
   
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="/Dashboard" class="nav-link">Home</a>
      </li>
      
    </ul>

  
  </nav>

  <aside class="main-sidebar sidebar-dark-primary elevation-4">
 
    <a href="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt=" Logo" class="brand-image img-circle elevation-3"
           style={{opacity: '.8'}}/>
      <span class="brand-text font-weight-light">Movie Admin</span>
    </a>

 
    <div class="sidebar">
 
    
    {/* <Router>  */}
    
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
          <li class="nav-item has-treeview menu-open">
            <Link to="/admin/home" class="nav-link active">
              <i class="nav-icon fas fa-home"></i>
              <p>
                Home
                <i class="right fas fa-angle-left"></i>
              </p>
            </Link>
       
          </li>
          <li class="nav-item">
            <Link to="/admin/movielist" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Movies Management
               
              </p>
            </Link>
          
          </li>
          <li class="nav-item">
            <Link to="/admin/addmovieshow" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Add Movie Shows  Management
               
              </p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/moviehalllist" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Screen Management
               
              </p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/citylist" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                City Management
               
              </p>
            </Link>
          
          </li>
        
      
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="nav-icon fas fa-arrow-right"></i>
              <p>
                Logout
               
              </p>
            </a>
          </li>
         
        </ul>
      </nav>
     
      {/* </Router>  */}
    </div>
    
  </aside>
        {this.props.children}

        <footer class="main-footer">
        <strong>Copyright &copy; 2023 <a href="#">Online Ticket Boooking System</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0
        </div>
      </footer>
        </div>
       
        )
    }
}