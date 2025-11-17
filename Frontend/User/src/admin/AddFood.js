import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link,Redirect,useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';


export function AddFood() {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

const addFoodItem=(data)=>
{
   
    axios.post(apiUrl + 'foods',data).then(result => {  
         if(result.data==='SUCCESS')
          {
            //  <Redirect to="/admin/CityList" />
            history.push("/admin/foodlist");
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
                <h3 class="card-title">Add Food Item</h3>
              </div>
            
              <form role="form" onSubmit={handleSubmit(addFoodItem)}>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Food Item Name</label>
                    <input type="text" name="item_name" class="form-control" id="exampleInputEmail1" placeholder="Enter Food Item Name" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.item_name && 'Food Name is required.'}</label>
                  </div>
               
                  <div class="form-group">
                    <label for="exampleInputEmail1">Food Description</label>
                    <input type="text" name="item_desc" class="form-control" id="exampleInputEmail1" placeholder="Enter Description" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.item_desc && 'Description Required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Unit Price</label>
                    <input type="text" name="unit_price" class="form-control" id="exampleInputEmail1" placeholder="Enter Price" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.unit_price && 'Price Required.'}</label>
                  </div>
                  <input type="hidden" name="qty" class="form-control" value="0" id="exampleInputEmail1" placeholder="Enter Price" ref={register({ required: true })} />

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

export default AddFood;