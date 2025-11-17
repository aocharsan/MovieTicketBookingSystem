import React from "react";

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router,useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';


export function EditFood() {

    const { register, handleSubmit, errors } = useForm();  
    const history = useHistory();
   
    const item = JSON.parse(localStorage.getItem('FoodItem'));
    
    console.log(item);
   
const addFoodItem=(data)=>
{
  
    axios.put(apiUrl + 'foods/'+item.id,data).then(result => {  
        /* if(result.data==='SUCCESS')
          {
            
          }
         else{
          alert("Error");
         }   */ 
                
      history.push("/admin/foodlist");
                    
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
                <h3 class="card-title">Edit Food Item</h3>
              </div>
            
              <form role="form" onSubmit={handleSubmit(addFoodItem)}>
                <div class="card-body">
                <div class="form-group">
                    <label for="exampleInputEmail1">Food Item Name</label>
                    <input type="text" name="item_name" defaultValue={item.item_name} class="form-control" id="exampleInputEmail1" placeholder="Enter Food Item Name" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.item_name && 'Food Name is required.'}</label>
                  </div>
               
                  <div class="form-group">
                    <label for="exampleInputEmail1">Food Description</label>
                    <input type="text" name="item_desc" class="form-control" defaultValue={item.item_desc} id="exampleInputEmail1" placeholder="Enter Description" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.item_desc && 'Description Required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Unit Price</label>
                    <input type="text" name="unit_price" class="form-control" defaultValue={item.unit_price} id="exampleInputEmail1" placeholder="Enter Price" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.unit_price && 'Price Required.'}</label>
                  </div>

                  <input type="hidden" name="qty" class="form-control" defaultValue={item.qty} id="exampleInputEmail1" placeholder="Enter Price" ref={register({ required: true })} />

               
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

export default EditFood;