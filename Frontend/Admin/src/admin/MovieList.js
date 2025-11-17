import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCity from './AddCity';

import EditCity from './EditCity';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class MovieList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {movieitems: []};  

    
    this.deleteMovieItem = this.deleteMovieItem.bind(this);
    this.editMovieItem = this.editMovieItem.bind(this);
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'movies')  
      .then(response => {  
        console.log(response.data);
        this.setState({ movieitems: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  

  editMovieItem(item){
    localStorage.setItem("MovieItem",JSON.stringify(item));
    this.props.history.push('/admin/editmovie' ); 
  }

  deleteMovieItem(cid){
   
    axios.delete(apiUrl+'movie/'+cid)  
      .then(response => {  
        this.setState({movieitems: this.state.movieitems.filter(item => item.id !== cid)});
      //  this.props.history.push('/CityList');

      })  
      .catch(function (error) {  
        console.log(error);  
      })  

  }

    render(){
        return(<div class="wrapper">          
        {/* <Sidebar/> */}
        <div class="content-wrapper">
      
        
        <section class="content">
  <div class="container-fluid">
  
    <div class="row">
    <div class="col-md-12">
    <br/>
           <div>
           <Link to={'/admin/AddMovie'} className="btn btn-primary">Add New Movie</Link> 
            
           </div>
           <br/>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">All Movies</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Movie Title</th>
                  <th>Description</th>
                  <th>Genre</th>
                  <th>Language</th>
                  <th>Duration</th>
                  <th>Release Date</th>
                  <th>Movie Poster</th>
                  <th>Action</th>
                 
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.movieitems.map((item, idx) => {  

                      return <tr key={item.id}>  

                        <td>{item.id }</td>  
                        <td>{item.mtitle }</td> 
                        <td>{item.mdesc }</td> 
                        <td>{item.genres.genre_name}</td>  
                        <td>{item.language}</td>
                        <td>{item.duration} Min</td>
                        <td>{item.release_date}</td>
                        <td>
                            <img src={item.movie_poster} width="200" height="200" ></img>
                            </td>
                        <td>  

                          <div class="btn-group">  

                           
                          <button className="btn btn-primary" onClick={()=>this.editMovieItem(item)}>Edit</button>  

                          <button className="btn btn-danger" onClick={()=>this.deleteMovieItem(item.id )}>Delete</button>  

                          </div>  

                        </td>  

                      </tr>  

                    })}  
                </tbody>
                </table>
                </div>


            </div>
            </div>
     
    
    
    </div>
   </div>
        </section>
        </div>
        {/* <Footer/> */}
    </div>       )
    }
}