import React,{ Component,useState ,useEffect} from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link,Redirect,useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';


export function AddMovie() {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [items, setItems] = React.useState([]);
    const movieposterbasestr ="";      

    React.useEffect(() => {

          async function getGenres() {
            axios.get(apiUrl+'genres')  
            .then(response => {  
                setItems(response.data) ;             
            })  
            .catch(function (error) {  
              console.log(error);  
            }) }
            getGenres();
        }, []);



const addMovietem=(data)=>
{   
   
    getBase64(data.movie_poster[0], (result) => {       
       
        data.movie_poster= result;
        axios.post(apiUrl + 'movie',data).then(result => {  
            if(result.data==='SUCCESS')
             {
               //  <Redirect to="/admin/CityList" />
               history.push("/admin/movielist");
             }
            else{
             alert("Error");
            }                      
                       
         }); 
    });
    console.log(data);
    
   
    
   
};

const getBase64=(file, cb)=> {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
};
   
        return(<div class="wrapper">          
        <div class="content-wrapper">
      
        
        <section class="content">
  <div class="container-fluid">
  
    <div class="row">
    <div class="col-md-6">
           
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add New Movie</h3>
              </div>
            
              <form role="form" onSubmit={handleSubmit(addMovietem)}>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Movie Name</label>
                    <input type="text" name="mtitle" class="form-control" id="exampleInputEmail1" placeholder="Enter Movie Name" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.mtitle && 'Movie Name is required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Movie Description</label>
                    <input type="text" name="mdesc" class="form-control" id="exampleInputEmail1" placeholder="Enter Movie Description Name" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.mdesc && 'Movie Description is required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Movie Genre</label>
                    <select  class="form-control" name="genre_id" ref={register({ required: true })}>
                        {items.map((item,index)=>(
                        <option value={item.id} key={index}>{item.genre_name}</option>
                        ))}
                    
                    </select>
                    <label class="error danger" style={{color:'red'}}>{errors.mdesc && 'Movie Description is required.'}</label>
                  </div>

               
                  <div class="form-group">
                    <label for="exampleInputEmail1">Movie Language</label>
                    <input type="text" name="language" class="form-control" id="exampleInputEmail1" placeholder="Enter Language" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.language && 'Language Required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Duration (Min)</label>
                    <input type="text" name="duration" class="form-control" id="exampleInputEmail1" placeholder="Enter Duration" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.duration && 'Duration Required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Director</label>
                    <input type="text" name="director" class="form-control" id="exampleInputEmail1" placeholder="Enter director" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.director && 'Director Required.'}</label>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Cast &amp; Crew</label>
                    <input type="text" name="cast_crew" class="form-control" id="exampleInputEmail1" placeholder="Enter Cast and Crew" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.cast_crew && 'Cast and Crew Required.'}</label>
                  </div>


                  <div class="form-group">
                    <label for="exampleInputEmail1">Release Date</label>
                    <input type="date" name="release_date" class="form-control" id="exampleInputEmail1" placeholder="Enter Date" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.release_date && 'Date Required.'}</label>
                  </div>

            
                <div class="form-group">
                    <label for="exampleInputEmail1">Movie Poster</label>
                    <input type="file" name="movie_poster" class="form-control" id="exampleInputEmail1" placeholder="Enter Poster" ref={register({ required: true })} />
                    <label class="error danger" style={{color:'red'}}>{errors.movie_poster && 'Poster Required.'}</label>
                  </div> 

                  <input type="hidden" name="mstatus" value="1" ref={register({ required: true })} />
                 
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

export default AddMovie;