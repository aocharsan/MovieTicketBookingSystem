import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link,Redirect,useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';


export function AddMovieHall() {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

const addMovieHall=(data)=>
{
   
    axios.post(apiUrl + 'moviehall',data).then(result => {  
         if(result.data==='SUCCESS')
          {
            //  <Redirect to="/admin/CityList" />
            history.push("/admin/moviehalllist");
          }
         else{
          alert("Error");
         }    
                
                    
      }); 
};
   
        return(<div class="wrapper">          
        <div class="content-wrapper">
      
        
        <section class="content">
  <div class="container-fluid">
  
    <div class="row">
    <div class="col-md-8">
           
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Movie Hall</h3>
              </div>
            
              <form role="form" onSubmit={handleSubmit(addMovieHall)}>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Movie Hall Name</label>
                    <input type="text" name="screen_name" class="form-control" id="exampleInputEmail1" placeholder="Enter Movie Hall Name" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.screen_name && 'Screen Name is required.'}</label>
                  </div>
               
                  <div class="form-group">
                    <label for="exampleInputEmail1">Seating Capacity</label>
                    <input type="text" name="seating_capacity" class="form-control" id="exampleInputEmail1" placeholder="Enter Seating Capacity" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.seating_capacity && 'Seating Capacity Required.'}</label>
                  </div>

                  </div>
              

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            </div>   
    
    
    </div>
   </div>
        </section>
        </div>
    </div>       )
    
};

export default AddMovieHall;