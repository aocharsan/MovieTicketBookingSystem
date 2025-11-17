import React,{ Component,useState ,useEffect} from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link,Redirect,useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';


export function AddMovieShow() {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [items, setItems] = useState([]);
    const [halls, setHalls] = useState([])
    
       

    React.useEffect(() => {

          async function getMovies() {
            axios.get(apiUrl+'movies')  
            .then(response => {  
                setItems(response.data) ;             
            })  
            .catch(function (error) {  
              console.log(error);  
            }) }
            getMovies();
            
            
         
            async function getMovieHall() {
                axios.get(apiUrl+'moviehalls')  
                .then(response => {  
                    setHalls(response.data) ;             
                })  
                .catch(function (error) {  
                  console.log(error);  
                }) }
                getMovieHall();
         

        }, []);

       

      

const addshow=(data)=>
{   
    axios.post(apiUrl + 'movieshow',data).then(result => {  
        if(result.data==='SUCCESS')
         {
           //  <Redirect to="/admin/CityList" />
           history.push("/admin/movielist");
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
    <div class="col-md-6">
           
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add New Show</h3>
              </div>
            
              <form role="form" onSubmit={handleSubmit(addshow)}>
                <div class="card-body">
                 

                  <div class="form-group">
                    <label for="exampleInputEmail1">Movie Name</label>
                    <select  class="form-control" name="movie_id" ref={register({ required: true })}>
                        {items.map((item,index)=>(
                        <option value={item.id} key={index}>{item.mtitle}</option>
                        ))}
                    
                    </select>
                    <label class="error danger" style={{color:'red'}}>{errors.mdesc && 'Movie Name is required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Screen Name</label>
                    <select  class="form-control" name="screen_id" ref={register({ required: true })}>
                        {halls.map((hall,index)=>(
                        <option value={hall.id} key={index}>{hall.screen_name}</option>
                        ))}
                    
                    </select>
                    <label class="error danger" style={{color:'red'}}>{errors.mdesc && 'Movie Name is required.'}</label>
                  </div>

                  
                  <div class="form-group">
                    <label for="exampleInputEmail1">Show Date</label>
                    <input type="date" name="show_date" class="form-control" id="exampleInputEmail1" placeholder="Enter Date" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.release_date && 'Date Required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Show Time</label>
                    <input type="time" name="show_time" class="form-control" id="exampleInputEmail1" placeholder="Enter Cast and Crew" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.cast_crew && 'Time Required.'}</label>
                  </div>


               

                  <div class="form-group">
                    <label for="exampleInputEmail1">Ticket Price</label>
                    <input type="text" name="ticket_price" class="form-control" id="exampleInputEmail1" placeholder="Enter Price" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.duration && 'Price Required.'}</label>
                  </div>                 
                 


                  <input type="hidden" name="show_status" value="Available" ref={register({ required: true })} />
                 
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

export default AddMovieShow;