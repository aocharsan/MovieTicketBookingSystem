// SideBar.js

import React, {Component} from 'react';

import { BrowserRouter as Router,  Switch,Route, Link } from 'react-router-dom';
import CityList from './CityList';

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

 
 
   
 
    <div class="sidebar">
 
    
  
    
      
       
         
            <Link to="/admin/home" class="nav-link active">
             
                Home
             
            </Link>
       
          
            <Link to="/admin/movielist" class="nav-link">
              
             
                Movies Management
               
            
            </Link>
          
         
            <Link to="/admin/addmovieshow" class="nav-link">
              
             
                Add Movie Shows  Management
               
             
            </Link>
        
            <Link to="/admin/moviehalllist" class="nav-link">
             
            
                Screen Management
               
             
            </Link>
         
            <Link to="/admin/citylist" class="nav-link">
             
             
                City Management
               
             
            </Link>
          
        
            <Link to="/admin/genrelist" class="nav-link">
              
             
                Genre Management
               
              
            </Link>
          
        
            <Link to="/admin/userlist" class="nav-link">
              
              
                Customer Management
               
              
            </Link>
        
            <Link to="/admin/bookinglist" class="nav-link">
              
              
                Booking Management
               
              
            </Link>
         
            <a href="/admin/foodlist" class="nav-link">
              
              
                Food Management
               
              
            </a>
         
            <a href="/" class="nav-link">
              
              
                Logout
               
              
            </a>
        
     
     
    </div>
    
 
        {this.props.children}

       
        </div>
       
        )
    }
}