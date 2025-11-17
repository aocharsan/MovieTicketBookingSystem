import { useState,useEffect } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link,Redirect,useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';


export function EditGenre() {

    const { register, handleSubmit, errors } = useForm();  
   
    const item = JSON.parse(localStorage.getItem('GenreData'));
    const history = useHistory();

   
const addNewGenre=(data)=>
{
  
    axios.put(apiUrl + 'gener/'+item.id,data).then(result => {  
        /* if(result.data==='SUCCESS')
          {
            //  <Redirect to="/admin/CityList" />
           // props.history.push("/admin/GenreList");
          }
         else{
          alert("Error");
         }   */ 
                
        history.push("/admin/GenreList");
                    
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
                <h3 class="card-title">Edit Genre</h3>
              </div>
            
              <form role="form" onSubmit={handleSubmit(addNewGenre)}>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Genre Name</label>
                    <input type="text" name="genre_name" defaultValue={item.genre_name} class="form-control" id="exampleInputEmail1" placeholder="Enter Genre" ref={register({ required: true })} />
                    <label class="error danger">{errors.genre_name && 'Genre is required.'}</label>
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

export default EditGenre;