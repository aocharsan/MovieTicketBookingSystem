import React,{ Component,useState ,useEffect} from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link,Redirect,useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';





function EditMovie() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const item = JSON.parse(localStorage.getItem('MovieItem'));

    const addMovieitem = (data) => {

        axios.put(apiUrl + 'movie/' + item.id, data).then(result => {
            /* if(result.data==='SUCCESS')
              {
                
              }
             else{
              alert("Error");
             }   */

            history.push("/admin/MovieList");

        });
    };


    return (
        <div class="wrapper">
            <div class="content-wrapper">


                <section class="content">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-md-6">

                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Edit Movie</h3>
                                    </div>

                                    <form role="form" onSubmit={handleSubmit(addMovieitem)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Movie Name</label>
                                                <input type="text" name="mtitle" defaultValue={item.mtitle} class="form-control" id="exampleInputEmail1" placeholder="Enter Movie Name" ref={register({ required: true })} />
                                                <label class="error danger" style={{ color: 'red' }}>{errors.mtitle && 'Movie Name is required.'}</label>
                                            </div>

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Movie description</label>
                                                <input type="text" name="mdesc" defaultValue={item.mdesc} class="form-control" id="exampleInputEmail1" placeholder="Enter Movie Description Name" ref={register({ required: true })} />
                                                <label class="error danger" style={{ color: 'red' }}>{errors.mdesc && 'Movie Description is required.'}</label>
                                            </div>

                                            


                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Movie Language</label>
                                                <input type="text" name="language" defaultValue={item.language}  class="form-control" id="exampleInputEmail1" placeholder="Enter Language" ref={register({ required: true })} />
                                                <label class="error danger" style={{ color: 'red' }}>{errors.language && 'Language Required.'}</label>
                                            </div>

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Duration (Min)</label>
                                                <input type="text" name="duration" defaultValue={item.duration}  class="form-control" id="exampleInputEmail1" placeholder="Enter Duration" ref={register({ required: true })} />
                                                <label class="error danger" style={{ color: 'red' }}>{errors.duration && 'Duration Required.'}</label>
                                            </div>

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Director</label>
                                                <input type="text" name="director" defaultValue={item.director} class="form-control" id="exampleInputEmail1" placeholder="Enter Price" ref={register({ required: true })} />
                                                <label class="error danger" style={{ color: 'red' }}>{errors.director && 'Director Required.'}</label>
                                            </div>

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Cast &amp; Crew</label>
                                                <input type="text" name="cast_crew"  defaultValue={item.cast_crew} class="form-control" id="exampleInputEmail1" placeholder="Enter Cast and Crew" ref={register({ required: true })} />
                                                <label class="error danger" style={{ color: 'red' }}>{errors.cast_crew && 'Cast and Crew Required.'}</label>
                                            </div>


                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Release Date</label>
                                                <input type="date" name="release_date"  defaultValue={item.release_date} class="form-control" id="exampleInputEmail1" placeholder="Enter Date" ref={register({ required: true })} />
                                                <label class="error danger" style={{ color: 'red' }}>{errors.release_date && 'Date Required.'}</label>
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
        </div>)

};


export default EditMovie;
