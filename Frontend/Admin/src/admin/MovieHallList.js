import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCity from './AddCity';

import EditCity from './EditCity';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class MovieHallList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {moviehalls: []};  

    
    this.deleteMhall = this.deleteMhall.bind(this);
    this.editMhall = this.editMhall.bind(this);
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'moviehalls')  
      .then(response => {  
        console.log(response.data);
        this.setState({ moviehalls: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  

  editMhall(item){
    localStorage.setItem("MovieHallData",JSON.stringify(item));
    this.props.history.push('/admin/editmoviehall' ); 
  }

  deleteMhall(cid){
   
    axios.delete(apiUrl+'moviehall/'+cid)  
      .then(response => {  
        this.setState({moviehalls: this.state.moviehalls.filter(item => item.id !== cid)});
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
           <Link to={'/admin/AddMovieHall'} className="btn btn-primary">Add MovieHall</Link> 
            
           </div>
           <br/>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">All MovieHall</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Hall Name</th>
                  <th>Seating Capacity</th>
                  <th>Action</th>
                 
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.moviehalls.map((item, idx) => {  

                      return <tr key={item.id}>  

                        <td>{item.id }</td>  
                        <td>{item.screen_name }</td>  
                        <td>{item.seating_capacity}</td>  

                    

                        <td>  

                          <div class="btn-group">  

                           
                          <button className="btn btn-primary" onClick={()=>this.editMhall(item)}>Edit</button>  

                          <button className="btn btn-danger" onClick={()=>this.deleteMhall(item.id )}>Delete</button>  

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